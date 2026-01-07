import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cje")
export default class CjeController {
  @operation({
    summary: "Get Cje",
  })
  @get()
  static getCje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cje",
  })
  @post("{id}")
  static createCje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
