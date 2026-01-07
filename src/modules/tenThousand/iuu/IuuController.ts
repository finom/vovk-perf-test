import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuu")
export default class IuuController {
  @operation({
    summary: "Get Iuu",
  })
  @get()
  static getIuu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuu",
  })
  @post("{id}")
  static createIuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
