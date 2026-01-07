import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkg")
export default class HkgController {
  @operation({
    summary: "Get Hkg",
  })
  @get()
  static getHkg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkg",
  })
  @post("{id}")
  static createHkg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
