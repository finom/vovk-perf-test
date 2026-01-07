import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhw")
export default class FhwController {
  @operation({
    summary: "Get Fhw",
  })
  @get()
  static getFhw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhw",
  })
  @post("{id}")
  static createFhw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
