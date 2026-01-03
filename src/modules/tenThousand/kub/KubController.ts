import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kubs")
export default class KubController {
  @operation({
    summary: "Get Kubs",
  })
  @get()
  static getKubs = procedure({
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
