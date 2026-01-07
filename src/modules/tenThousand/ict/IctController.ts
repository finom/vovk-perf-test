import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ict")
export default class IctController {
  @operation({
    summary: "Get Ict",
  })
  @get()
  static getIct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ict",
  })
  @post("{id}")
  static createIct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
