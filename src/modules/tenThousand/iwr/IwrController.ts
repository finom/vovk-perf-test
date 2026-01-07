import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwr")
export default class IwrController {
  @operation({
    summary: "Get Iwr",
  })
  @get()
  static getIwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwr",
  })
  @post("{id}")
  static createIwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
