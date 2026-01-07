import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agi")
export default class AgiController {
  @operation({
    summary: "Get Agi",
  })
  @get()
  static getAgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agi",
  })
  @post("{id}")
  static createAgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
