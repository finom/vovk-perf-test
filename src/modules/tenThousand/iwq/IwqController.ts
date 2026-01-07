import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwq")
export default class IwqController {
  @operation({
    summary: "Get Iwq",
  })
  @get()
  static getIwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwq",
  })
  @post("{id}")
  static createIwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
