import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itt")
export default class IttController {
  @operation({
    summary: "Get Itt",
  })
  @get()
  static getItt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itt",
  })
  @post("{id}")
  static createItt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
