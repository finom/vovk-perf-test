import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koa")
export default class KoaController {
  @operation({
    summary: "Get Koa",
  })
  @get()
  static getKoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koa",
  })
  @post("{id}")
  static createKoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
