import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frn")
export default class FrnController {
  @operation({
    summary: "Get Frn",
  })
  @get()
  static getFrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frn",
  })
  @post("{id}")
  static createFrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
