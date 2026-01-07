import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsr")
export default class NsrController {
  @operation({
    summary: "Get Nsr",
  })
  @get()
  static getNsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsr",
  })
  @post("{id}")
  static createNsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
