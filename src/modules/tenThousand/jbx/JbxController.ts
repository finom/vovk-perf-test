import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbx")
export default class JbxController {
  @operation({
    summary: "Get Jbx",
  })
  @get()
  static getJbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbx",
  })
  @post("{id}")
  static createJbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
