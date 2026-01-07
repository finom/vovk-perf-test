import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dq")
export default class DqController {
  @operation({
    summary: "Get Dq",
  })
  @get()
  static getDq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dq",
  })
  @post("{id}")
  static createDq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
