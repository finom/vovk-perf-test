import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eub")
export default class EubController {
  @operation({
    summary: "Get Eub",
  })
  @get()
  static getEub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eub",
  })
  @post("{id}")
  static createEub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
