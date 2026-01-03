import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbus")
export default class HbuController {
  @operation({
    summary: "Get Hbus",
  })
  @get()
  static getHbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbu",
  })
  @post("{id}")
  static createHbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
