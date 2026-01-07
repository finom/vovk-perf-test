import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdg")
export default class JdgController {
  @operation({
    summary: "Get Jdg",
  })
  @get()
  static getJdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdg",
  })
  @post("{id}")
  static createJdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
