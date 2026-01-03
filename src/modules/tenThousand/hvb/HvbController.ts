import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvbs")
export default class HvbController {
  @operation({
    summary: "Get Hvbs",
  })
  @get()
  static getHvbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvb",
  })
  @post("{id}")
  static createHvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
