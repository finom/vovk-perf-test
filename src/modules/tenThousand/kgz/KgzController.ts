import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgz")
export default class KgzController {
  @operation({
    summary: "Get Kgz",
  })
  @get()
  static getKgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgz",
  })
  @post("{id}")
  static createKgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
