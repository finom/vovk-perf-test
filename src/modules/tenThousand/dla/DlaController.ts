import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dla")
export default class DlaController {
  @operation({
    summary: "Get Dla",
  })
  @get()
  static getDla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dla",
  })
  @post("{id}")
  static createDla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
