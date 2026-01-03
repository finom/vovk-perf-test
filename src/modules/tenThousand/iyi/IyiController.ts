import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyis")
export default class IyiController {
  @operation({
    summary: "Get Iyis",
  })
  @get()
  static getIyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyi",
  })
  @post("{id}")
  static createIyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
