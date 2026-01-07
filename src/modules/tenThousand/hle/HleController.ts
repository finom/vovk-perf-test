import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hle")
export default class HleController {
  @operation({
    summary: "Get Hle",
  })
  @get()
  static getHle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hle",
  })
  @post("{id}")
  static createHle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
