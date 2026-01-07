import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhb")
export default class FhbController {
  @operation({
    summary: "Get Fhb",
  })
  @get()
  static getFhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhb",
  })
  @post("{id}")
  static createFhb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
