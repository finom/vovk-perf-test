import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wv")
export default class WvController {
  @operation({
    summary: "Get Wv",
  })
  @get()
  static getWv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wv",
  })
  @post("{id}")
  static createWv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
