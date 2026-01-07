import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhe")
export default class HheController {
  @operation({
    summary: "Get Hhe",
  })
  @get()
  static getHhe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhe",
  })
  @post("{id}")
  static createHhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
