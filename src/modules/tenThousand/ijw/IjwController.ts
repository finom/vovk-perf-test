import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijw")
export default class IjwController {
  @operation({
    summary: "Get Ijw",
  })
  @get()
  static getIjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijw",
  })
  @post("{id}")
  static createIjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
