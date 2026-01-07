import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhp")
export default class FhpController {
  @operation({
    summary: "Get Fhp",
  })
  @get()
  static getFhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhp",
  })
  @post("{id}")
  static createFhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
