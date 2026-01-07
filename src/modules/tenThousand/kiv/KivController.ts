import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiv")
export default class KivController {
  @operation({
    summary: "Get Kiv",
  })
  @get()
  static getKiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiv",
  })
  @post("{id}")
  static createKiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
