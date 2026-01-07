import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkl")
export default class FklController {
  @operation({
    summary: "Get Fkl",
  })
  @get()
  static getFkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkl",
  })
  @post("{id}")
  static createFkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
