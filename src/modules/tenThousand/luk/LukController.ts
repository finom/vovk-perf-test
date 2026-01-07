import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luk")
export default class LukController {
  @operation({
    summary: "Get Luk",
  })
  @get()
  static getLuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luk",
  })
  @post("{id}")
  static createLuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
