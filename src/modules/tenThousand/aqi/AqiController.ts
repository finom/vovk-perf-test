import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqi")
export default class AqiController {
  @operation({
    summary: "Get Aqi",
  })
  @get()
  static getAqi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqi",
  })
  @post("{id}")
  static createAqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
