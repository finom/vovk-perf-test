import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjr")
export default class KjrController {
  @operation({
    summary: "Get Kjr",
  })
  @get()
  static getKjr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjr",
  })
  @post("{id}")
  static createKjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
