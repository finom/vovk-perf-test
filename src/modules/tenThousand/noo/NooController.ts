import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noo")
export default class NooController {
  @operation({
    summary: "Get Noo",
  })
  @get()
  static getNoo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noo",
  })
  @post("{id}")
  static createNoo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
