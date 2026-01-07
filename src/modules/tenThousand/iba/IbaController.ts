import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iba")
export default class IbaController {
  @operation({
    summary: "Get Iba",
  })
  @get()
  static getIba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iba",
  })
  @post("{id}")
  static createIba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
