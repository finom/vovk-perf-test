import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkk")
export default class HkkController {
  @operation({
    summary: "Get Hkk",
  })
  @get()
  static getHkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkk",
  })
  @post("{id}")
  static createHkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
