import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cea")
export default class CeaController {
  @operation({
    summary: "Get Cea",
  })
  @get()
  static getCea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cea",
  })
  @post("{id}")
  static createCea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
