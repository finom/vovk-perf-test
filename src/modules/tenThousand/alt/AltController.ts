import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alt")
export default class AltController {
  @operation({
    summary: "Get Alt",
  })
  @get()
  static getAlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alt",
  })
  @post("{id}")
  static createAlt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
