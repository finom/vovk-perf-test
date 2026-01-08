import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzr")
export default class JzrController {
  @operation({
    summary: "Get Jzr",
  })
  @get()
  static getJzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzr",
  })
  @post("{id}")
  static createJzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
