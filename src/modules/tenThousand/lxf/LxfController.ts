import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxf")
export default class LxfController {
  @operation({
    summary: "Get Lxf",
  })
  @get()
  static getLxf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxf",
  })
  @post("{id}")
  static createLxf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
