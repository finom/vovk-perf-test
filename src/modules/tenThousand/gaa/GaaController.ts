import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaa")
export default class GaaController {
  @operation({
    summary: "Get Gaa",
  })
  @get()
  static getGaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaa",
  })
  @post("{id}")
  static createGaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
