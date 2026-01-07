import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acz")
export default class AczController {
  @operation({
    summary: "Get Acz",
  })
  @get()
  static getAcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acz",
  })
  @post("{id}")
  static createAcz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
