import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgi")
export default class MgiController {
  @operation({
    summary: "Get Mgi",
  })
  @get()
  static getMgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgi",
  })
  @post("{id}")
  static createMgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
