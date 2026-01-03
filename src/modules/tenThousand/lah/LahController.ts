import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lahs")
export default class LahController {
  @operation({
    summary: "Get Lahs",
  })
  @get()
  static getLahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lah",
  })
  @post("{id}")
  static createLah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
