import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhc")
export default class BhcController {
  @operation({
    summary: "Get Bhc",
  })
  @get()
  static getBhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhc",
  })
  @post("{id}")
  static createBhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
