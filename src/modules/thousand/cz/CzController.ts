import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cz")
export default class CzController {
  @operation({
    summary: "Get Cz",
  })
  @get()
  static getCz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cz",
  })
  @post("{id}")
  static createCz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
