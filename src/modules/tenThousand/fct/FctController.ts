import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fct")
export default class FctController {
  @operation({
    summary: "Get Fct",
  })
  @get()
  static getFct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fct",
  })
  @post("{id}")
  static createFct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
