import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ez")
export default class EzController {
  @operation({
    summary: "Get Ez",
  })
  @get()
  static getEz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ez",
  })
  @post("{id}")
  static createEz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
