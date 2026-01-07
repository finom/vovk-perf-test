import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgh")
export default class KghController {
  @operation({
    summary: "Get Kgh",
  })
  @get()
  static getKgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgh",
  })
  @post("{id}")
  static createKgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
