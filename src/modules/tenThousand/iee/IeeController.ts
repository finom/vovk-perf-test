import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iees")
export default class IeeController {
  @operation({
    summary: "Get Iees",
  })
  @get()
  static getIees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iee",
  })
  @post("{id}")
  static createIee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
