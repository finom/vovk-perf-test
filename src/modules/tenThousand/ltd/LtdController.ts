import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltds")
export default class LtdController {
  @operation({
    summary: "Get Ltds",
  })
  @get()
  static getLtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltd",
  })
  @post("{id}")
  static createLtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
