import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzo")
export default class HzoController {
  @operation({
    summary: "Get Hzo",
  })
  @get()
  static getHzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hzo",
  })
  @post("{id}")
  static createHzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
