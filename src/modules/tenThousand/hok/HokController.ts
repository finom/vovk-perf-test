import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hok")
export default class HokController {
  @operation({
    summary: "Get Hok",
  })
  @get()
  static getHok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hok",
  })
  @post("{id}")
  static createHok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
