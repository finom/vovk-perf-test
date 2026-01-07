import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npl")
export default class NplController {
  @operation({
    summary: "Get Npl",
  })
  @get()
  static getNpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npl",
  })
  @post("{id}")
  static createNpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
