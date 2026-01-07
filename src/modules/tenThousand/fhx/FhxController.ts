import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhx")
export default class FhxController {
  @operation({
    summary: "Get Fhx",
  })
  @get()
  static getFhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhx",
  })
  @post("{id}")
  static createFhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
