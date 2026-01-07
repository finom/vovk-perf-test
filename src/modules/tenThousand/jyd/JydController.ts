import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyd")
export default class JydController {
  @operation({
    summary: "Get Jyd",
  })
  @get()
  static getJyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyd",
  })
  @post("{id}")
  static createJyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
