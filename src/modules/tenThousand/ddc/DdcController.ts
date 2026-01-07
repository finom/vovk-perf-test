import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddc")
export default class DdcController {
  @operation({
    summary: "Get Ddc",
  })
  @get()
  static getDdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddc",
  })
  @post("{id}")
  static createDdc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
