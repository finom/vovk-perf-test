import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmx")
export default class FmxController {
  @operation({
    summary: "Get Fmx",
  })
  @get()
  static getFmx = procedure({
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
