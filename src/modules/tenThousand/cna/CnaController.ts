import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cna")
export default class CnaController {
  @operation({
    summary: "Get Cna",
  })
  @get()
  static getCna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cna",
  })
  @post("{id}")
  static createCna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
