import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnc")
export default class DncController {
  @operation({
    summary: "Get Dnc",
  })
  @get()
  static getDnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnc",
  })
  @post("{id}")
  static createDnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
