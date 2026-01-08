import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zi")
export default class ZiController {
  @operation({
    summary: "Get Zi",
  })
  @get()
  static getZi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zi",
  })
  @post("{id}")
  static createZi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
