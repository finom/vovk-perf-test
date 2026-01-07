import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdt")
export default class FdtController {
  @operation({
    summary: "Get Fdt",
  })
  @get()
  static getFdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdt",
  })
  @post("{id}")
  static createFdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
