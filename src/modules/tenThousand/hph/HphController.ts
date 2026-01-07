import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hph")
export default class HphController {
  @operation({
    summary: "Get Hph",
  })
  @get()
  static getHph = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hph",
  })
  @post("{id}")
  static createHph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
