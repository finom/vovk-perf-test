import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixt")
export default class IxtController {
  @operation({
    summary: "Get Ixt",
  })
  @get()
  static getIxt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixt",
  })
  @post("{id}")
  static createIxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
