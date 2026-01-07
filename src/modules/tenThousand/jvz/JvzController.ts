import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvz")
export default class JvzController {
  @operation({
    summary: "Get Jvz",
  })
  @get()
  static getJvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvz",
  })
  @post("{id}")
  static createJvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
