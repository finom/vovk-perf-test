import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eng")
export default class EngController {
  @operation({
    summary: "Get Eng",
  })
  @get()
  static getEng = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eng",
  })
  @post("{id}")
  static createEng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
