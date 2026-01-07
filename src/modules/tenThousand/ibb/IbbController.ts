import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibb")
export default class IbbController {
  @operation({
    summary: "Get Ibb",
  })
  @get()
  static getIbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibb",
  })
  @post("{id}")
  static createIbb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
