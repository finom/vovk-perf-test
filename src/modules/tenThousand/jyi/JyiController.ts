import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyis")
export default class JyiController {
  @operation({
    summary: "Get Jyis",
  })
  @get()
  static getJyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyi",
  })
  @post("{id}")
  static createJyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
