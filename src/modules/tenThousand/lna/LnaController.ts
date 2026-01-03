import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnas")
export default class LnaController {
  @operation({
    summary: "Get Lnas",
  })
  @get()
  static getLnas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lna",
  })
  @post("{id}")
  static createLna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
