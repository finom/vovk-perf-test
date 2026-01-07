import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ge")
export default class GeController {
  @operation({
    summary: "Get Ge",
  })
  @get()
  static getGe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ge",
  })
  @post("{id}")
  static createGe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
