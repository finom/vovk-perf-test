import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aui")
export default class AuiController {
  @operation({
    summary: "Get Aui",
  })
  @get()
  static getAui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aui",
  })
  @post("{id}")
  static createAui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
