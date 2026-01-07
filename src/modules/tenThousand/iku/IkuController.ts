import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iku")
export default class IkuController {
  @operation({
    summary: "Get Iku",
  })
  @get()
  static getIku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iku",
  })
  @post("{id}")
  static createIku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
