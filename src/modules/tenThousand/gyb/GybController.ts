import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gybs")
export default class GybController {
  @operation({
    summary: "Get Gybs",
  })
  @get()
  static getGybs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyb",
  })
  @post("{id}")
  static createGyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
