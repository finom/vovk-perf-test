import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azk")
export default class AzkController {
  @operation({
    summary: "Get Azk",
  })
  @get()
  static getAzk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azk",
  })
  @post("{id}")
  static createAzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
