import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhz")
export default class BhzController {
  @operation({
    summary: "Get Bhz",
  })
  @get()
  static getBhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhz",
  })
  @post("{id}")
  static createBhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
