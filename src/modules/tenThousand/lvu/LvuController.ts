import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvu")
export default class LvuController {
  @operation({
    summary: "Get Lvu",
  })
  @get()
  static getLvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvu",
  })
  @post("{id}")
  static createLvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
