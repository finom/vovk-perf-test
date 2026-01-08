import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmk")
export default class JmkController {
  @operation({
    summary: "Get Jmk",
  })
  @get()
  static getJmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmk",
  })
  @post("{id}")
  static createJmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
