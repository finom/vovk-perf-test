import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvj")
export default class MvjController {
  @operation({
    summary: "Get Mvj",
  })
  @get()
  static getMvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvj",
  })
  @post("{id}")
  static createMvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
