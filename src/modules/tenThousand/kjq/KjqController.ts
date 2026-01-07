import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjq")
export default class KjqController {
  @operation({
    summary: "Get Kjq",
  })
  @get()
  static getKjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjq",
  })
  @post("{id}")
  static createKjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
