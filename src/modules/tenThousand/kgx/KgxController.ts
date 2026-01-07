import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgx")
export default class KgxController {
  @operation({
    summary: "Get Kgx",
  })
  @get()
  static getKgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgx",
  })
  @post("{id}")
  static createKgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
