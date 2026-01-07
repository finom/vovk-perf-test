import { procedure, prefix, get, post, operation } from "vovk";

@prefix("non")
export default class NonController {
  @operation({
    summary: "Get Non",
  })
  @get()
  static getNon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Non",
  })
  @post("{id}")
  static createNon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
