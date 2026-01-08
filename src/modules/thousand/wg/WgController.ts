import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wg")
export default class WgController {
  @operation({
    summary: "Get Wg",
  })
  @get()
  static getWg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wg",
  })
  @post("{id}")
  static createWg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
