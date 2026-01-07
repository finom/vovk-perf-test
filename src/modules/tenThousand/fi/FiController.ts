import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fi")
export default class FiController {
  @operation({
    summary: "Get Fi",
  })
  @get()
  static getFi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fi",
  })
  @post("{id}")
  static createFi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
