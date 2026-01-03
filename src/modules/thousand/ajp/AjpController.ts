import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajps")
export default class AjpController {
  @operation({
    summary: "Get Ajps",
  })
  @get()
  static getAjps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajp",
  })
  @post("{id}")
  static createAjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
