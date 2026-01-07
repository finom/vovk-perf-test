import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezq")
export default class EzqController {
  @operation({
    summary: "Get Ezq",
  })
  @get()
  static getEzq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezq",
  })
  @post("{id}")
  static createEzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
