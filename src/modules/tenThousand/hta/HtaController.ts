import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hta")
export default class HtaController {
  @operation({
    summary: "Get Hta",
  })
  @get()
  static getHta = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hta",
  })
  @post("{id}")
  static createHta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
