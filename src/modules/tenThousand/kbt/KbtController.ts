import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbt")
export default class KbtController {
  @operation({
    summary: "Get Kbt",
  })
  @get()
  static getKbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbt",
  })
  @post("{id}")
  static createKbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
