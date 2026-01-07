import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvw")
export default class MvwController {
  @operation({
    summary: "Get Mvw",
  })
  @get()
  static getMvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvw",
  })
  @post("{id}")
  static createMvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
