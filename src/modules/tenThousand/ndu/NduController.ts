import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndu")
export default class NduController {
  @operation({
    summary: "Get Ndu",
  })
  @get()
  static getNdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndu",
  })
  @post("{id}")
  static createNdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
