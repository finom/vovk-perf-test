import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moy")
export default class MoyController {
  @operation({
    summary: "Get Moy",
  })
  @get()
  static getMoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moy",
  })
  @post("{id}")
  static createMoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
