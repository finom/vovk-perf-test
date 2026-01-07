import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niu")
export default class NiuController {
  @operation({
    summary: "Get Niu",
  })
  @get()
  static getNiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niu",
  })
  @post("{id}")
  static createNiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
