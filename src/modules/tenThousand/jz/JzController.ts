import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jz")
export default class JzController {
  @operation({
    summary: "Get Jz",
  })
  @get()
  static getJz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jz",
  })
  @post("{id}")
  static createJz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
