import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjus")
export default class KjuController {
  @operation({
    summary: "Get Kjus",
  })
  @get()
  static getKjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kju",
  })
  @post("{id}")
  static createKju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
