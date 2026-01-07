import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cer")
export default class CerController {
  @operation({
    summary: "Get Cer",
  })
  @get()
  static getCer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cer",
  })
  @post("{id}")
  static createCer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
