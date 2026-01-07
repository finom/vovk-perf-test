import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lul")
export default class LulController {
  @operation({
    summary: "Get Lul",
  })
  @get()
  static getLul = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lul",
  })
  @post("{id}")
  static createLul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
