import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gri")
export default class GriController {
  @operation({
    summary: "Get Gri",
  })
  @get()
  static getGri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gri",
  })
  @post("{id}")
  static createGri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
