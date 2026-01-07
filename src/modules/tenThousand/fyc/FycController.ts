import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyc")
export default class FycController {
  @operation({
    summary: "Get Fyc",
  })
  @get()
  static getFyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyc",
  })
  @post("{id}")
  static createFyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
