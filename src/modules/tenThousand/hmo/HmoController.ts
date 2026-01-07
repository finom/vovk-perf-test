import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmo")
export default class HmoController {
  @operation({
    summary: "Get Hmo",
  })
  @get()
  static getHmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmo",
  })
  @post("{id}")
  static createHmo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
