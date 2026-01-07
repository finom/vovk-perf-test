import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhf")
export default class BhfController {
  @operation({
    summary: "Get Bhf",
  })
  @get()
  static getBhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhf",
  })
  @post("{id}")
  static createBhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
