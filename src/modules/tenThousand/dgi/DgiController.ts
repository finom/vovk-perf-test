import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgi")
export default class DgiController {
  @operation({
    summary: "Get Dgi",
  })
  @get()
  static getDgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgi",
  })
  @post("{id}")
  static createDgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
