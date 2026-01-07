import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuc")
export default class FucController {
  @operation({
    summary: "Get Fuc",
  })
  @get()
  static getFuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuc",
  })
  @post("{id}")
  static createFuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
