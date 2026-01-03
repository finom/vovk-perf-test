import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrds")
export default class HrdController {
  @operation({
    summary: "Get Hrds",
  })
  @get()
  static getHrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrd",
  })
  @post("{id}")
  static createHrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
