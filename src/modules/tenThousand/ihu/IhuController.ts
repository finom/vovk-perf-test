import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihu")
export default class IhuController {
  @operation({
    summary: "Get Ihu",
  })
  @get()
  static getIhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihu",
  })
  @post("{id}")
  static createIhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
