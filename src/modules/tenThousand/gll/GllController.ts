import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gll")
export default class GllController {
  @operation({
    summary: "Get Gll",
  })
  @get()
  static getGll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gll",
  })
  @post("{id}")
  static createGll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
