import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msis")
export default class MsiController {
  @operation({
    summary: "Get Msis",
  })
  @get()
  static getMsis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msi",
  })
  @post("{id}")
  static createMsi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
