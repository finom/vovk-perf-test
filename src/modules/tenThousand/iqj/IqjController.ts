import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqj")
export default class IqjController {
  @operation({
    summary: "Get Iqj",
  })
  @get()
  static getIqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqj",
  })
  @post("{id}")
  static createIqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
