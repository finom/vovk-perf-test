import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nos")
export default class NosController {
  @operation({
    summary: "Get Nos",
  })
  @get()
  static getNos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nos",
  })
  @post("{id}")
  static createNos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
