import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exn")
export default class ExnController {
  @operation({
    summary: "Get Exn",
  })
  @get()
  static getExn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exn",
  })
  @post("{id}")
  static createExn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
