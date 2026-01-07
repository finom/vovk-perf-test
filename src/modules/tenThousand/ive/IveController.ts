import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ive")
export default class IveController {
  @operation({
    summary: "Get Ive",
  })
  @get()
  static getIve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ive",
  })
  @post("{id}")
  static createIve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
