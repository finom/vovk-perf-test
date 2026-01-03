import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iils")
export default class IilController {
  @operation({
    summary: "Get Iils",
  })
  @get()
  static getIils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iil",
  })
  @post("{id}")
  static createIil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
