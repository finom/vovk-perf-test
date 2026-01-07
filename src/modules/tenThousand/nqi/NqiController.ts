import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqi")
export default class NqiController {
  @operation({
    summary: "Get Nqi",
  })
  @get()
  static getNqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqi",
  })
  @post("{id}")
  static createNqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
