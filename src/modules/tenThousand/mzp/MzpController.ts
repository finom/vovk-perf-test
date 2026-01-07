import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzp")
export default class MzpController {
  @operation({
    summary: "Get Mzp",
  })
  @get()
  static getMzp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzp",
  })
  @post("{id}")
  static createMzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
