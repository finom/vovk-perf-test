import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgd")
export default class KgdController {
  @operation({
    summary: "Get Kgd",
  })
  @get()
  static getKgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgd",
  })
  @post("{id}")
  static createKgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
