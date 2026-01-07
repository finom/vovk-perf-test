import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boz")
export default class BozController {
  @operation({
    summary: "Get Boz",
  })
  @get()
  static getBoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boz",
  })
  @post("{id}")
  static createBoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
