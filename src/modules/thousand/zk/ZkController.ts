import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zk")
export default class ZkController {
  @operation({
    summary: "Get Zk",
  })
  @get()
  static getZk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zk",
  })
  @post("{id}")
  static createZk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
