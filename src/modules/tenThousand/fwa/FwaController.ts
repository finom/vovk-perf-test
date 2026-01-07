import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwa")
export default class FwaController {
  @operation({
    summary: "Get Fwa",
  })
  @get()
  static getFwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwa",
  })
  @post("{id}")
  static createFwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
