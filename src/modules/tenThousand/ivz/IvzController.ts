import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivz")
export default class IvzController {
  @operation({
    summary: "Get Ivz",
  })
  @get()
  static getIvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivz",
  })
  @post("{id}")
  static createIvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
