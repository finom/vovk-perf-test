import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfj")
export default class DfjController {
  @operation({
    summary: "Get Dfj",
  })
  @get()
  static getDfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfj",
  })
  @post("{id}")
  static createDfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
