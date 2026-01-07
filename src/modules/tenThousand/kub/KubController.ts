import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kub")
export default class KubController {
  @operation({
    summary: "Get Kub",
  })
  @get()
  static getKub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kub",
  })
  @post("{id}")
  static createKub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
