import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbb")
export default class HbbController {
  @operation({
    summary: "Get Hbb",
  })
  @get()
  static getHbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbb",
  })
  @post("{id}")
  static createHbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
