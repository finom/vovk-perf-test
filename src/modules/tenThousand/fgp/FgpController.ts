import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgps")
export default class FgpController {
  @operation({
    summary: "Get Fgps",
  })
  @get()
  static getFgps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgp",
  })
  @post("{id}")
  static createFgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
