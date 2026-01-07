import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhk")
export default class FhkController {
  @operation({
    summary: "Get Fhk",
  })
  @get()
  static getFhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhk",
  })
  @post("{id}")
  static createFhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
