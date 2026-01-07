import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvn")
export default class MvnController {
  @operation({
    summary: "Get Mvn",
  })
  @get()
  static getMvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvn",
  })
  @post("{id}")
  static createMvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
