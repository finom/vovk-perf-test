import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sk")
export default class SkController {
  @operation({
    summary: "Get Sk",
  })
  @get()
  static getSk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sk",
  })
  @post("{id}")
  static createSk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
