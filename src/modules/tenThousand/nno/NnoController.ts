import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nno")
export default class NnoController {
  @operation({
    summary: "Get Nno",
  })
  @get()
  static getNno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nno",
  })
  @post("{id}")
  static createNno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
