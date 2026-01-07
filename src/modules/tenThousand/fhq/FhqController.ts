import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhq")
export default class FhqController {
  @operation({
    summary: "Get Fhq",
  })
  @get()
  static getFhq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhq",
  })
  @post("{id}")
  static createFhq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
