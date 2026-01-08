import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npj")
export default class NpjController {
  @operation({
    summary: "Get Npj",
  })
  @get()
  static getNpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npj",
  })
  @post("{id}")
  static createNpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
