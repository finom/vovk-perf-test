import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhi")
export default class FhiController {
  @operation({
    summary: "Get Fhi",
  })
  @get()
  static getFhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhi",
  })
  @post("{id}")
  static createFhi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
