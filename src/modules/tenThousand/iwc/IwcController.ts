import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwc")
export default class IwcController {
  @operation({
    summary: "Get Iwc",
  })
  @get()
  static getIwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwc",
  })
  @post("{id}")
  static createIwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
