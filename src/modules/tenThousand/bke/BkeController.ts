import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkes")
export default class BkeController {
  @operation({
    summary: "Get Bkes",
  })
  @get()
  static getBkes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bke",
  })
  @post("{id}")
  static createBke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
