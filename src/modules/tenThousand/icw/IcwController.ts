import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icw")
export default class IcwController {
  @operation({
    summary: "Get Icw",
  })
  @get()
  static getIcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icw",
  })
  @post("{id}")
  static createIcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
