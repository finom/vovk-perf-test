import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhm")
export default class FhmController {
  @operation({
    summary: "Get Fhm",
  })
  @get()
  static getFhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhm",
  })
  @post("{id}")
  static createFhm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
