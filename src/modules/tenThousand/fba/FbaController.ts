import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fba")
export default class FbaController {
  @operation({
    summary: "Get Fba",
  })
  @get()
  static getFba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fba",
  })
  @post("{id}")
  static createFba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
