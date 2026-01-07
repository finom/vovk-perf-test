import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbu")
export default class HbuController {
  @operation({
    summary: "Get Hbu",
  })
  @get()
  static getHbu = procedure({
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
