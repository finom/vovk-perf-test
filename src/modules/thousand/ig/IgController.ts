import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ig")
export default class IgController {
  @operation({
    summary: "Get Ig",
  })
  @get()
  static getIg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ig",
  })
  @post("{id}")
  static createIg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
