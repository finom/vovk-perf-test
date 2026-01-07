import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhx")
export default class BhxController {
  @operation({
    summary: "Get Bhx",
  })
  @get()
  static getBhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhx",
  })
  @post("{id}")
  static createBhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
