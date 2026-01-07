import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmx")
export default class BmxController {
  @operation({
    summary: "Get Bmx",
  })
  @get()
  static getBmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmx",
  })
  @post("{id}")
  static createBmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
