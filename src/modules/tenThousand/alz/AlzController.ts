import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alz")
export default class AlzController {
  @operation({
    summary: "Get Alz",
  })
  @get()
  static getAlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alz",
  })
  @post("{id}")
  static createAlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
