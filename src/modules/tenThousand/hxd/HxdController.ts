import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxd")
export default class HxdController {
  @operation({
    summary: "Get Hxd",
  })
  @get()
  static getHxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxd",
  })
  @post("{id}")
  static createHxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
