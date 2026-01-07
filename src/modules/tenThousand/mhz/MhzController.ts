import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhz")
export default class MhzController {
  @operation({
    summary: "Get Mhz",
  })
  @get()
  static getMhz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhz",
  })
  @post("{id}")
  static createMhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
