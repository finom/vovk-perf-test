import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhx")
export default class MhxController {
  @operation({
    summary: "Get Mhx",
  })
  @get()
  static getMhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhx",
  })
  @post("{id}")
  static createMhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
