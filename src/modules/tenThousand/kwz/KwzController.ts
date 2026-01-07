import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwz")
export default class KwzController {
  @operation({
    summary: "Get Kwz",
  })
  @get()
  static getKwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwz",
  })
  @post("{id}")
  static createKwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
