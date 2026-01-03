import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grus")
export default class GruController {
  @operation({
    summary: "Get Grus",
  })
  @get()
  static getGrus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gru",
  })
  @post("{id}")
  static createGru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
