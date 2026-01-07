import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhf")
export default class MhfController {
  @operation({
    summary: "Get Mhf",
  })
  @get()
  static getMhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhf",
  })
  @post("{id}")
  static createMhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
