import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihm")
export default class IhmController {
  @operation({
    summary: "Get Ihm",
  })
  @get()
  static getIhm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihm",
  })
  @post("{id}")
  static createIhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
