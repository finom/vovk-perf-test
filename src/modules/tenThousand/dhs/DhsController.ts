import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhs")
export default class DhsController {
  @operation({
    summary: "Get Dhs",
  })
  @get()
  static getDhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhs",
  })
  @post("{id}")
  static createDhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
