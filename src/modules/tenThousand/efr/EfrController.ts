import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efr")
export default class EfrController {
  @operation({
    summary: "Get Efr",
  })
  @get()
  static getEfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efr",
  })
  @post("{id}")
  static createEfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
