import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enjs")
export default class EnjController {
  @operation({
    summary: "Get Enjs",
  })
  @get()
  static getEnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Enj",
  })
  @post("{id}")
  static createEnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
