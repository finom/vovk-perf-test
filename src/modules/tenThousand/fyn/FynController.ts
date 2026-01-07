import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyn")
export default class FynController {
  @operation({
    summary: "Get Fyn",
  })
  @get()
  static getFyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyn",
  })
  @post("{id}")
  static createFyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
