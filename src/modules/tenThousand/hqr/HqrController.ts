import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqr")
export default class HqrController {
  @operation({
    summary: "Get Hqr",
  })
  @get()
  static getHqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqr",
  })
  @post("{id}")
  static createHqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
