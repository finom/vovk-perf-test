import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyi")
export default class GyiController {
  @operation({
    summary: "Get Gyi",
  })
  @get()
  static getGyi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyi",
  })
  @post("{id}")
  static createGyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
