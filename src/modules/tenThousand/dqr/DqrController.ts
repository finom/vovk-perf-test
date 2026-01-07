import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqr")
export default class DqrController {
  @operation({
    summary: "Get Dqr",
  })
  @get()
  static getDqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqr",
  })
  @post("{id}")
  static createDqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
