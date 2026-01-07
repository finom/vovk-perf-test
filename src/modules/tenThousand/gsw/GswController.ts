import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsw")
export default class GswController {
  @operation({
    summary: "Get Gsw",
  })
  @get()
  static getGsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsw",
  })
  @post("{id}")
  static createGsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
