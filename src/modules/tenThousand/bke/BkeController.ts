import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bke")
export default class BkeController {
  @operation({
    summary: "Get Bke",
  })
  @get()
  static getBke = procedure({
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
