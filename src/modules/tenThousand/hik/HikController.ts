import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hik")
export default class HikController {
  @operation({
    summary: "Get Hik",
  })
  @get()
  static getHik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hik",
  })
  @post("{id}")
  static createHik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
