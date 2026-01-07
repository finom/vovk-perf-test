import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhj")
export default class BhjController {
  @operation({
    summary: "Get Bhj",
  })
  @get()
  static getBhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhj",
  })
  @post("{id}")
  static createBhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
