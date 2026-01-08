import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxz")
export default class HxzController {
  @operation({
    summary: "Get Hxz",
  })
  @get()
  static getHxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxz",
  })
  @post("{id}")
  static createHxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
