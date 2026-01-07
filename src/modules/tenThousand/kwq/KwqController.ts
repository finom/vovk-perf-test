import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwq")
export default class KwqController {
  @operation({
    summary: "Get Kwq",
  })
  @get()
  static getKwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwq",
  })
  @post("{id}")
  static createKwq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
