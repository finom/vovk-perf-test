import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aga")
export default class AgaController {
  @operation({
    summary: "Get Aga",
  })
  @get()
  static getAga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aga",
  })
  @post("{id}")
  static createAga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
