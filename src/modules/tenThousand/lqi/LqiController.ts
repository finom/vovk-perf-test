import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqi")
export default class LqiController {
  @operation({
    summary: "Get Lqi",
  })
  @get()
  static getLqi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqi",
  })
  @post("{id}")
  static createLqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
