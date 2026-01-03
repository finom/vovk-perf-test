import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzis")
export default class KziController {
  @operation({
    summary: "Get Kzis",
  })
  @get()
  static getKzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzi",
  })
  @post("{id}")
  static createKzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
