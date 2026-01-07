import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpe")
export default class CpeController {
  @operation({
    summary: "Get Cpe",
  })
  @get()
  static getCpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpe",
  })
  @post("{id}")
  static createCpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
