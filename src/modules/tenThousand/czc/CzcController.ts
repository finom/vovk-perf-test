import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czc")
export default class CzcController {
  @operation({
    summary: "Get Czc",
  })
  @get()
  static getCzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czc",
  })
  @post("{id}")
  static createCzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
