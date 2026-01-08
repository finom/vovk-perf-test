import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zz")
export default class ZzController {
  @operation({
    summary: "Get Zz",
  })
  @get()
  static getZz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zz",
  })
  @post("{id}")
  static createZz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
