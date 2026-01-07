import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhk")
export default class BhkController {
  @operation({
    summary: "Get Bhk",
  })
  @get()
  static getBhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhk",
  })
  @post("{id}")
  static createBhk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
