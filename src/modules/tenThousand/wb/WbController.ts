import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wb")
export default class WbController {
  @operation({
    summary: "Get Wb",
  })
  @get()
  static getWb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wb",
  })
  @post("{id}")
  static createWb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
