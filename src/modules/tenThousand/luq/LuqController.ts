import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luq")
export default class LuqController {
  @operation({
    summary: "Get Luq",
  })
  @get()
  static getLuq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luq",
  })
  @post("{id}")
  static createLuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
