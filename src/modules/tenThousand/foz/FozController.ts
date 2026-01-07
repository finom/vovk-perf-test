import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foz")
export default class FozController {
  @operation({
    summary: "Get Foz",
  })
  @get()
  static getFoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foz",
  })
  @post("{id}")
  static createFoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
