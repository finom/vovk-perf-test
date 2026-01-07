import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdt")
export default class GdtController {
  @operation({
    summary: "Get Gdt",
  })
  @get()
  static getGdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdt",
  })
  @post("{id}")
  static createGdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
