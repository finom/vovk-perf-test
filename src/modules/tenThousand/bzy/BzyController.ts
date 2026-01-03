import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzies")
export default class BzyController {
  @operation({
    summary: "Get Bzies",
  })
  @get()
  static getBzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzy",
  })
  @post("{id}")
  static createBzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
