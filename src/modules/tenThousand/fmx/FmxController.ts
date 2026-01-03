import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmxes")
export default class FmxController {
  @operation({
    summary: "Get Fmxes",
  })
  @get()
  static getFmxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmx",
  })
  @post("{id}")
  static createFmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
