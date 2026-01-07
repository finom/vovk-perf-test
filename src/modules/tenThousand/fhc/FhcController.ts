import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhc")
export default class FhcController {
  @operation({
    summary: "Get Fhc",
  })
  @get()
  static getFhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhc",
  })
  @post("{id}")
  static createFhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
