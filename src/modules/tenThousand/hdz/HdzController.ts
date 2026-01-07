import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdz")
export default class HdzController {
  @operation({
    summary: "Get Hdz",
  })
  @get()
  static getHdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdz",
  })
  @post("{id}")
  static createHdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
