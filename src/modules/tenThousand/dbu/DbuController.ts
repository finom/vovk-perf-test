import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbu")
export default class DbuController {
  @operation({
    summary: "Get Dbu",
  })
  @get()
  static getDbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbu",
  })
  @post("{id}")
  static createDbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
