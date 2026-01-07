import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyn")
export default class HynController {
  @operation({
    summary: "Get Hyn",
  })
  @get()
  static getHyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyn",
  })
  @post("{id}")
  static createHyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
