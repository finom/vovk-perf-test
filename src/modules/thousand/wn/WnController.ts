import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wn")
export default class WnController {
  @operation({
    summary: "Get Wn",
  })
  @get()
  static getWn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wn",
  })
  @post("{id}")
  static createWn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
