import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ug")
export default class UgController {
  @operation({
    summary: "Get Ug",
  })
  @get()
  static getUg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ug",
  })
  @post("{id}")
  static createUg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
