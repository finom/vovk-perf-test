import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhc")
export default class MhcController {
  @operation({
    summary: "Get Mhc",
  })
  @get()
  static getMhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhc",
  })
  @post("{id}")
  static createMhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
