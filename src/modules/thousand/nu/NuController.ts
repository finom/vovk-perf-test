import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nu")
export default class NuController {
  @operation({
    summary: "Get Nu",
  })
  @get()
  static getNu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nu",
  })
  @post("{id}")
  static createNu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
