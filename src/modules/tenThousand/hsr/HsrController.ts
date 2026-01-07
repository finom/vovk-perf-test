import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsr")
export default class HsrController {
  @operation({
    summary: "Get Hsr",
  })
  @get()
  static getHsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsr",
  })
  @post("{id}")
  static createHsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
