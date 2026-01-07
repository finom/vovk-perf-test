import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhh")
export default class FhhController {
  @operation({
    summary: "Get Fhh",
  })
  @get()
  static getFhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhh",
  })
  @post("{id}")
  static createFhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
