import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpj")
export default class BpjController {
  @operation({
    summary: "Get Bpj",
  })
  @get()
  static getBpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bpj",
  })
  @post("{id}")
  static createBpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
