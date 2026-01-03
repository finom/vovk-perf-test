import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gies")
export default class GyController {
  @operation({
    summary: "Get Gies",
  })
  @get()
  static getGies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gy",
  })
  @post("{id}")
  static createGy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
