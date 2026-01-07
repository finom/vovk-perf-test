import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apb")
export default class ApbController {
  @operation({
    summary: "Get Apb",
  })
  @get()
  static getApb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apb",
  })
  @post("{id}")
  static createApb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
