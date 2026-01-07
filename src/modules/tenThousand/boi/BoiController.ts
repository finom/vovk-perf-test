import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boi")
export default class BoiController {
  @operation({
    summary: "Get Boi",
  })
  @get()
  static getBoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boi",
  })
  @post("{id}")
  static createBoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
