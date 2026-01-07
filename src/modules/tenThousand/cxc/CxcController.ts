import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxc")
export default class CxcController {
  @operation({
    summary: "Get Cxc",
  })
  @get()
  static getCxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxc",
  })
  @post("{id}")
  static createCxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
