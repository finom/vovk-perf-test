import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmi")
export default class HmiController {
  @operation({
    summary: "Get Hmi",
  })
  @get()
  static getHmi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmi",
  })
  @post("{id}")
  static createHmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
