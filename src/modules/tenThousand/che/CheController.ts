import { procedure, prefix, get, post, operation } from "vovk";

@prefix("che")
export default class CheController {
  @operation({
    summary: "Get Che",
  })
  @get()
  static getChe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Che",
  })
  @post("{id}")
  static createChe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
