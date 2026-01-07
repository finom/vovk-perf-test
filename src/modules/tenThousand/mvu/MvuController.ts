import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvu")
export default class MvuController {
  @operation({
    summary: "Get Mvu",
  })
  @get()
  static getMvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvu",
  })
  @post("{id}")
  static createMvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
