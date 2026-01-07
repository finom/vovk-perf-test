import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mko")
export default class MkoController {
  @operation({
    summary: "Get Mko",
  })
  @get()
  static getMko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mko",
  })
  @post("{id}")
  static createMko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
