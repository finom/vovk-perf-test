import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frt")
export default class FrtController {
  @operation({
    summary: "Get Frt",
  })
  @get()
  static getFrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frt",
  })
  @post("{id}")
  static createFrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
