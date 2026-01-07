import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exv")
export default class ExvController {
  @operation({
    summary: "Get Exv",
  })
  @get()
  static getExv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exv",
  })
  @post("{id}")
  static createExv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
