import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faa")
export default class FaaController {
  @operation({
    summary: "Get Faa",
  })
  @get()
  static getFaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Faa",
  })
  @post("{id}")
  static createFaa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
