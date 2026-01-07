import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhz")
export default class FhzController {
  @operation({
    summary: "Get Fhz",
  })
  @get()
  static getFhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhz",
  })
  @post("{id}")
  static createFhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
