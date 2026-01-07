import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnm")
export default class DnmController {
  @operation({
    summary: "Get Dnm",
  })
  @get()
  static getDnm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnm",
  })
  @post("{id}")
  static createDnm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
