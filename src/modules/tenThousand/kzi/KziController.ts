import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzi")
export default class KziController {
  @operation({
    summary: "Get Kzi",
  })
  @get()
  static getKzi = procedure({
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
