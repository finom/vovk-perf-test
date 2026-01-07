import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrd")
export default class HrdController {
  @operation({
    summary: "Get Hrd",
  })
  @get()
  static getHrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrd",
  })
  @post("{id}")
  static createHrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
