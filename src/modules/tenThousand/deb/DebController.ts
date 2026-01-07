import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deb")
export default class DebController {
  @operation({
    summary: "Get Deb",
  })
  @get()
  static getDeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deb",
  })
  @post("{id}")
  static createDeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
