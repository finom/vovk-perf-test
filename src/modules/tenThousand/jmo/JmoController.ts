import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmo")
export default class JmoController {
  @operation({
    summary: "Get Jmo",
  })
  @get()
  static getJmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmo",
  })
  @post("{id}")
  static createJmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
