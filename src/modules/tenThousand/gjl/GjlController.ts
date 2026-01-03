import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjls")
export default class GjlController {
  @operation({
    summary: "Get Gjls",
  })
  @get()
  static getGjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjl",
  })
  @post("{id}")
  static createGjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
