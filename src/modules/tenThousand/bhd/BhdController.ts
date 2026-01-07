import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhd")
export default class BhdController {
  @operation({
    summary: "Get Bhd",
  })
  @get()
  static getBhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhd",
  })
  @post("{id}")
  static createBhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
