import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fii")
export default class FiiController {
  @operation({
    summary: "Get Fii",
  })
  @get()
  static getFii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fii",
  })
  @post("{id}")
  static createFii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
