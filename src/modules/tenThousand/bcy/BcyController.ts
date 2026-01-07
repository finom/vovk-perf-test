import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcy")
export default class BcyController {
  @operation({
    summary: "Get Bcy",
  })
  @get()
  static getBcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcy",
  })
  @post("{id}")
  static createBcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
