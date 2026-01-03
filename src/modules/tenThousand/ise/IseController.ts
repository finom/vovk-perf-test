import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ises")
export default class IseController {
  @operation({
    summary: "Get Ises",
  })
  @get()
  static getIses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ise",
  })
  @post("{id}")
  static createIse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
