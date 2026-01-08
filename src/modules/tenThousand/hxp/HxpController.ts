import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxp")
export default class HxpController {
  @operation({
    summary: "Get Hxp",
  })
  @get()
  static getHxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxp",
  })
  @post("{id}")
  static createHxp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
