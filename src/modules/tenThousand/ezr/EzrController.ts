import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezr")
export default class EzrController {
  @operation({
    summary: "Get Ezr",
  })
  @get()
  static getEzr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezr",
  })
  @post("{id}")
  static createEzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
