import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsl")
export default class FslController {
  @operation({
    summary: "Get Fsl",
  })
  @get()
  static getFsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsl",
  })
  @post("{id}")
  static createFsl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
