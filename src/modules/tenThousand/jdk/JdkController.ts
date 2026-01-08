import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdk")
export default class JdkController {
  @operation({
    summary: "Get Jdk",
  })
  @get()
  static getJdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdk",
  })
  @post("{id}")
  static createJdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
