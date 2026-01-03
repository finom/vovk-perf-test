import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayis")
export default class AyiController {
  @operation({
    summary: "Get Ayis",
  })
  @get()
  static getAyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayi",
  })
  @post("{id}")
  static createAyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
