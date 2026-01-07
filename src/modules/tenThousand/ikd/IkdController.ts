import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikd")
export default class IkdController {
  @operation({
    summary: "Get Ikd",
  })
  @get()
  static getIkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ikd",
  })
  @post("{id}")
  static createIkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
