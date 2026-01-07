import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdt")
export default class FdtController {
  @operation({
    summary: "Get Fdt",
  })
  @get()
  static getFdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdt",
  })
  @post("{id}")
  static createFdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
