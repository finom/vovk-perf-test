import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmx")
export default class MmxController {
  @operation({
    summary: "Get Mmx",
  })
  @get()
  static getMmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmx",
  })
  @post("{id}")
  static createMmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
