import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fko")
export default class FkoController {
  @operation({
    summary: "Get Fko",
  })
  @get()
  static getFko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fko",
  })
  @post("{id}")
  static createFko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
