import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hny")
export default class HnyController {
  @operation({
    summary: "Get Hny",
  })
  @get()
  static getHny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hny",
  })
  @post("{id}")
  static createHny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
