import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doi")
export default class DoiController {
  @operation({
    summary: "Get Doi",
  })
  @get()
  static getDoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doi",
  })
  @post("{id}")
  static createDoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
