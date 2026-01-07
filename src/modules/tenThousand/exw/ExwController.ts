import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exw")
export default class ExwController {
  @operation({
    summary: "Get Exw",
  })
  @get()
  static getExw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exw",
  })
  @post("{id}")
  static createExw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
