import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxts")
export default class KxtController {
  @operation({
    summary: "Get Kxts",
  })
  @get()
  static getKxts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kxt",
  })
  @post("{id}")
  static createKxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
