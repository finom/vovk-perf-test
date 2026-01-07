import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sb")
export default class SbController {
  @operation({
    summary: "Get Sb",
  })
  @get()
  static getSb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sb",
  })
  @post("{id}")
  static createSb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
