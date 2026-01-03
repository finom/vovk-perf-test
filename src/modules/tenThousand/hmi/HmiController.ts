import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmis")
export default class HmiController {
  @operation({
    summary: "Get Hmis",
  })
  @get()
  static getHmis = procedure({
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
