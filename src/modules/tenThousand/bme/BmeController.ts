import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmes")
export default class BmeController {
  @operation({
    summary: "Get Bmes",
  })
  @get()
  static getBmes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bme",
  })
  @post("{id}")
  static createBme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
