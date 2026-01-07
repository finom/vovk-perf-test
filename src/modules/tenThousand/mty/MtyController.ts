import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mty")
export default class MtyController {
  @operation({
    summary: "Get Mty",
  })
  @get()
  static getMty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mty",
  })
  @post("{id}")
  static createMty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
