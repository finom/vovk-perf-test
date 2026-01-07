import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emz")
export default class EmzController {
  @operation({
    summary: "Get Emz",
  })
  @get()
  static getEmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emz",
  })
  @post("{id}")
  static createEmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
