import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ira")
export default class IraController {
  @operation({
    summary: "Get Ira",
  })
  @get()
  static getIra = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ira",
  })
  @post("{id}")
  static createIra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
