import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ili")
export default class IliController {
  @operation({
    summary: "Get Ili",
  })
  @get()
  static getIli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ili",
  })
  @post("{id}")
  static createIli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
