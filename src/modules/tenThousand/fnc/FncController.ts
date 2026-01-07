import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnc")
export default class FncController {
  @operation({
    summary: "Get Fnc",
  })
  @get()
  static getFnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnc",
  })
  @post("{id}")
  static createFnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
