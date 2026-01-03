import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kties")
export default class KtyController {
  @operation({
    summary: "Get Kties",
  })
  @get()
  static getKties = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kty",
  })
  @post("{id}")
  static createKty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
