import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nof")
export default class NofController {
  @operation({
    summary: "Get Nof",
  })
  @get()
  static getNof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nof",
  })
  @post("{id}")
  static createNof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
