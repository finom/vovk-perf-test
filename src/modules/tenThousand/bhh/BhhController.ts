import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhh")
export default class BhhController {
  @operation({
    summary: "Get Bhh",
  })
  @get()
  static getBhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhh",
  })
  @post("{id}")
  static createBhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
