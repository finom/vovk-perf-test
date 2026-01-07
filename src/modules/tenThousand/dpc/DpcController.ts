import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpc")
export default class DpcController {
  @operation({
    summary: "Get Dpc",
  })
  @get()
  static getDpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpc",
  })
  @post("{id}")
  static createDpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
