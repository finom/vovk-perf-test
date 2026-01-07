import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbn")
export default class NbnController {
  @operation({
    summary: "Get Nbn",
  })
  @get()
  static getNbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbn",
  })
  @post("{id}")
  static createNbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
