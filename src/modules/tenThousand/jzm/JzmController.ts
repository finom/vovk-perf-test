import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzm")
export default class JzmController {
  @operation({
    summary: "Get Jzm",
  })
  @get()
  static getJzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzm",
  })
  @post("{id}")
  static createJzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
