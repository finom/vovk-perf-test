import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzt")
export default class MztController {
  @operation({
    summary: "Get Mzt",
  })
  @get()
  static getMzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzt",
  })
  @post("{id}")
  static createMzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
