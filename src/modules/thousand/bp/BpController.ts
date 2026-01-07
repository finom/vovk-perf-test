import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bp")
export default class BpController {
  @operation({
    summary: "Get Bp",
  })
  @get()
  static getBp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bp",
  })
  @post("{id}")
  static createBp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
