import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iew")
export default class IewController {
  @operation({
    summary: "Get Iew",
  })
  @get()
  static getIew = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iew",
  })
  @post("{id}")
  static createIew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
