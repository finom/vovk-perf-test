import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byb")
export default class BybController {
  @operation({
    summary: "Get Byb",
  })
  @get()
  static getByb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byb",
  })
  @post("{id}")
  static createByb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
