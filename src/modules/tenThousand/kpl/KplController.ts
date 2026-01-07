import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpl")
export default class KplController {
  @operation({
    summary: "Get Kpl",
  })
  @get()
  static getKpl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpl",
  })
  @post("{id}")
  static createKpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
