import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhg")
export default class FhgController {
  @operation({
    summary: "Get Fhg",
  })
  @get()
  static getFhg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhg",
  })
  @post("{id}")
  static createFhg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
