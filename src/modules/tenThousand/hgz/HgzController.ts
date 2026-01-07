import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgz")
export default class HgzController {
  @operation({
    summary: "Get Hgz",
  })
  @get()
  static getHgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgz",
  })
  @post("{id}")
  static createHgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
