import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciq")
export default class CiqController {
  @operation({
    summary: "Get Ciq",
  })
  @get()
  static getCiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ciq",
  })
  @post("{id}")
  static createCiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
