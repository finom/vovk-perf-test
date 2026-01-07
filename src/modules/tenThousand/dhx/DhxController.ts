import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhx")
export default class DhxController {
  @operation({
    summary: "Get Dhx",
  })
  @get()
  static getDhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhx",
  })
  @post("{id}")
  static createDhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
