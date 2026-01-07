import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhj")
export default class DhjController {
  @operation({
    summary: "Get Dhj",
  })
  @get()
  static getDhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhj",
  })
  @post("{id}")
  static createDhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
