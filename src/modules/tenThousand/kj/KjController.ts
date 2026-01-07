import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kj")
export default class KjController {
  @operation({
    summary: "Get Kj",
  })
  @get()
  static getKj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kj",
  })
  @post("{id}")
  static createKj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
