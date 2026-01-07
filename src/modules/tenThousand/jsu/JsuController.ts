import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsu")
export default class JsuController {
  @operation({
    summary: "Get Jsu",
  })
  @get()
  static getJsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsu",
  })
  @post("{id}")
  static createJsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
