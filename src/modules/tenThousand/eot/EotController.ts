import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eot")
export default class EotController {
  @operation({
    summary: "Get Eot",
  })
  @get()
  static getEot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eot",
  })
  @post("{id}")
  static createEot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
