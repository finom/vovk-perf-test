import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kph")
export default class KphController {
  @operation({
    summary: "Get Kph",
  })
  @get()
  static getKph = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kph",
  })
  @post("{id}")
  static createKph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
