import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdt")
export default class GdtController {
  @operation({
    summary: "Get Gdt",
  })
  @get()
  static getGdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdt",
  })
  @post("{id}")
  static createGdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
