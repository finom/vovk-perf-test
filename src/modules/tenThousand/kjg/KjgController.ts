import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjg")
export default class KjgController {
  @operation({
    summary: "Get Kjg",
  })
  @get()
  static getKjg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjg",
  })
  @post("{id}")
  static createKjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
