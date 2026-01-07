import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyv")
export default class FyvController {
  @operation({
    summary: "Get Fyv",
  })
  @get()
  static getFyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyv",
  })
  @post("{id}")
  static createFyv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
