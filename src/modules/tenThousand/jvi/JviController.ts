import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvi")
export default class JviController {
  @operation({
    summary: "Get Jvi",
  })
  @get()
  static getJvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvi",
  })
  @post("{id}")
  static createJvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
