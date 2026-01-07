import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvu")
export default class FvuController {
  @operation({
    summary: "Get Fvu",
  })
  @get()
  static getFvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvu",
  })
  @post("{id}")
  static createFvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
