import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dff")
export default class DffController {
  @operation({
    summary: "Get Dff",
  })
  @get()
  static getDff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dff",
  })
  @post("{id}")
  static createDff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
