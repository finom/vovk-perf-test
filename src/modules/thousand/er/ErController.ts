import { procedure, prefix, get, post, operation } from "vovk";

@prefix("er")
export default class ErController {
  @operation({
    summary: "Get Er",
  })
  @get()
  static getEr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Er",
  })
  @post("{id}")
  static createEr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
