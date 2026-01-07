import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebu")
export default class EbuController {
  @operation({
    summary: "Get Ebu",
  })
  @get()
  static getEbu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebu",
  })
  @post("{id}")
  static createEbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
