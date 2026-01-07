import { procedure, prefix, get, post, operation } from "vovk";

@prefix("na")
export default class NaController {
  @operation({
    summary: "Get Na",
  })
  @get()
  static getNa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Na",
  })
  @post("{id}")
  static createNa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
