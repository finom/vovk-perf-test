import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luqs")
export default class LuqController {
  @operation({
    summary: "Get Luqs",
  })
  @get()
  static getLuqs = procedure({
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
