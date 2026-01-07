import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mso")
export default class MsoController {
  @operation({
    summary: "Get Mso",
  })
  @get()
  static getMso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mso",
  })
  @post("{id}")
  static createMso = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
