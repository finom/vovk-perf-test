import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iad")
export default class IadController {
  @operation({
    summary: "Get Iad",
  })
  @get()
  static getIad = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iad",
  })
  @post("{id}")
  static createIad = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
