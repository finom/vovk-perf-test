import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhv")
export default class FhvController {
  @operation({
    summary: "Get Fhv",
  })
  @get()
  static getFhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhv",
  })
  @post("{id}")
  static createFhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
