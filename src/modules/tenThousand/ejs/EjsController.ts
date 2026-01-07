import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejs")
export default class EjsController {
  @operation({
    summary: "Get Ejs",
  })
  @get()
  static getEjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejs",
  })
  @post("{id}")
  static createEjs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
