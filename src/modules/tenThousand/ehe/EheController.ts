import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehe")
export default class EheController {
  @operation({
    summary: "Get Ehe",
  })
  @get()
  static getEhe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehe",
  })
  @post("{id}")
  static createEhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
