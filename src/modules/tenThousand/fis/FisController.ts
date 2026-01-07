import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fis")
export default class FisController {
  @operation({
    summary: "Get Fis",
  })
  @get()
  static getFis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fis",
  })
  @post("{id}")
  static createFis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
