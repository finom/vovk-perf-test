import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmh")
export default class DmhController {
  @operation({
    summary: "Get Dmh",
  })
  @get()
  static getDmh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmh",
  })
  @post("{id}")
  static createDmh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
