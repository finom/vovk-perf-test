import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvu")
export default class HvuController {
  @operation({
    summary: "Get Hvu",
  })
  @get()
  static getHvu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvu",
  })
  @post("{id}")
  static createHvu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
