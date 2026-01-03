import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwbs")
export default class IwbController {
  @operation({
    summary: "Get Iwbs",
  })
  @get()
  static getIwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwb",
  })
  @post("{id}")
  static createIwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
