import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvq")
export default class HvqController {
  @operation({
    summary: "Get Hvq",
  })
  @get()
  static getHvq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvq",
  })
  @post("{id}")
  static createHvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
