import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeb")
export default class JebController {
  @operation({
    summary: "Get Jeb",
  })
  @get()
  static getJeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeb",
  })
  @post("{id}")
  static createJeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
