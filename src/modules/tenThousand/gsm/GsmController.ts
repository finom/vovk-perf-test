import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsm")
export default class GsmController {
  @operation({
    summary: "Get Gsm",
  })
  @get()
  static getGsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsm",
  })
  @post("{id}")
  static createGsm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
