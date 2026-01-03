import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcs")
export default class KcController {
  @operation({
    summary: "Get Kcs",
  })
  @get()
  static getKcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kc",
  })
  @post("{id}")
  static createKc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
