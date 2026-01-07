import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnj")
export default class DnjController {
  @operation({
    summary: "Get Dnj",
  })
  @get()
  static getDnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnj",
  })
  @post("{id}")
  static createDnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
