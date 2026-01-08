import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzk")
export default class JzkController {
  @operation({
    summary: "Get Jzk",
  })
  @get()
  static getJzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzk",
  })
  @post("{id}")
  static createJzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
