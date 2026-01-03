import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itbs")
export default class ItbController {
  @operation({
    summary: "Get Itbs",
  })
  @get()
  static getItbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itb",
  })
  @post("{id}")
  static createItb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
