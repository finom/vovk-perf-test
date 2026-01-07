import { procedure, prefix, get, post, operation } from "vovk";

@prefix("naa")
export default class NaaController {
  @operation({
    summary: "Get Naa",
  })
  @get()
  static getNaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Naa",
  })
  @post("{id}")
  static createNaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
