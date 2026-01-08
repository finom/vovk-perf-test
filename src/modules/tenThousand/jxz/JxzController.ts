import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxz")
export default class JxzController {
  @operation({
    summary: "Get Jxz",
  })
  @get()
  static getJxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxz",
  })
  @post("{id}")
  static createJxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
