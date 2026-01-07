import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lx")
export default class LxController {
  @operation({
    summary: "Get Lx",
  })
  @get()
  static getLx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lx",
  })
  @post("{id}")
  static createLx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
