import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwi")
export default class GwiController {
  @operation({
    summary: "Get Gwi",
  })
  @get()
  static getGwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwi",
  })
  @post("{id}")
  static createGwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
