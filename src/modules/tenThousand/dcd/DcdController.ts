import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcd")
export default class DcdController {
  @operation({
    summary: "Get Dcd",
  })
  @get()
  static getDcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dcd",
  })
  @post("{id}")
  static createDcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
