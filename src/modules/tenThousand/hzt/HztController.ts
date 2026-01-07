import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzt")
export default class HztController {
  @operation({
    summary: "Get Hzt",
  })
  @get()
  static getHzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzt",
  })
  @post("{id}")
  static createHzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
