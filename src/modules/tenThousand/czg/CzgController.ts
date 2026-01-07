import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czg")
export default class CzgController {
  @operation({
    summary: "Get Czg",
  })
  @get()
  static getCzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czg",
  })
  @post("{id}")
  static createCzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
