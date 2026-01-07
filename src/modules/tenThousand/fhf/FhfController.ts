import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhf")
export default class FhfController {
  @operation({
    summary: "Get Fhf",
  })
  @get()
  static getFhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhf",
  })
  @post("{id}")
  static createFhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
