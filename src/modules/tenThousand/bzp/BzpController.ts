import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzps")
export default class BzpController {
  @operation({
    summary: "Get Bzps",
  })
  @get()
  static getBzps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzp",
  })
  @post("{id}")
  static createBzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
