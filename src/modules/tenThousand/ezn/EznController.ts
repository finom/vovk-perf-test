import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezn")
export default class EznController {
  @operation({
    summary: "Get Ezn",
  })
  @get()
  static getEzn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezn",
  })
  @post("{id}")
  static createEzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
