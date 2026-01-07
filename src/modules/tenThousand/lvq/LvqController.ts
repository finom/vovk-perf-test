import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvq")
export default class LvqController {
  @operation({
    summary: "Get Lvq",
  })
  @get()
  static getLvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvq",
  })
  @post("{id}")
  static createLvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
