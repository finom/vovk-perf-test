import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
