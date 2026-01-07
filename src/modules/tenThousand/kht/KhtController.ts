import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kht")
export default class KhtController {
  @operation({
    summary: "Get Kht",
  })
  @get()
  static getKht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kht",
  })
  @post("{id}")
  static createKht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
