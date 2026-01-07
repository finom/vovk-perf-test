import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnd")
export default class HndController {
  @operation({
    summary: "Get Hnd",
  })
  @get()
  static getHnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnd",
  })
  @post("{id}")
  static createHnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
