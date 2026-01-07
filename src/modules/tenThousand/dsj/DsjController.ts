import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsj")
export default class DsjController {
  @operation({
    summary: "Get Dsj",
  })
  @get()
  static getDsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsj",
  })
  @post("{id}")
  static createDsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
