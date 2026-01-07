import { procedure, prefix, get, post, operation } from "vovk";

@prefix("has")
export default class HasController {
  @operation({
    summary: "Get Has",
  })
  @get()
  static getHas = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Has",
  })
  @post("{id}")
  static createHas = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
