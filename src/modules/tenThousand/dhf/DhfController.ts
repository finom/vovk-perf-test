import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhf")
export default class DhfController {
  @operation({
    summary: "Get Dhf",
  })
  @get()
  static getDhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhf",
  })
  @post("{id}")
  static createDhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
