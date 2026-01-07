import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cr")
export default class CrController {
  @operation({
    summary: "Get Cr",
  })
  @get()
  static getCr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cr",
  })
  @post("{id}")
  static createCr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
