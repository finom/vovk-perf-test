import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csy")
export default class CsyController {
  @operation({
    summary: "Get Csy",
  })
  @get()
  static getCsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csy",
  })
  @post("{id}")
  static createCsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
