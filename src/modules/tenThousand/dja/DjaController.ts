import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dja")
export default class DjaController {
  @operation({
    summary: "Get Dja",
  })
  @get()
  static getDja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dja",
  })
  @post("{id}")
  static createDja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
