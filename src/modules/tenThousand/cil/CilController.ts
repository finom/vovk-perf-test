import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cil")
export default class CilController {
  @operation({
    summary: "Get Cil",
  })
  @get()
  static getCil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cil",
  })
  @post("{id}")
  static createCil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
