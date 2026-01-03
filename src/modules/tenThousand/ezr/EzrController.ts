import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezrs")
export default class EzrController {
  @operation({
    summary: "Get Ezrs",
  })
  @get()
  static getEzrs = procedure({
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
