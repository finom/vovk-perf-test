import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eio")
export default class EioController {
  @operation({
    summary: "Get Eio",
  })
  @get()
  static getEio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eio",
  })
  @post("{id}")
  static createEio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
