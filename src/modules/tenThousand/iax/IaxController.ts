import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iax")
export default class IaxController {
  @operation({
    summary: "Get Iax",
  })
  @get()
  static getIax = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iax",
  })
  @post("{id}")
  static createIax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
