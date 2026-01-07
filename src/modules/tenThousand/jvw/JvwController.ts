import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvw")
export default class JvwController {
  @operation({
    summary: "Get Jvw",
  })
  @get()
  static getJvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvw",
  })
  @post("{id}")
  static createJvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
