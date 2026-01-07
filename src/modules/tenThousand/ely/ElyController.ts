import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ely")
export default class ElyController {
  @operation({
    summary: "Get Ely",
  })
  @get()
  static getEly = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ely",
  })
  @post("{id}")
  static createEly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
