import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhc")
export default class DhcController {
  @operation({
    summary: "Get Dhc",
  })
  @get()
  static getDhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhc",
  })
  @post("{id}")
  static createDhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
