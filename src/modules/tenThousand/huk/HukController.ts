import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huk")
export default class HukController {
  @operation({
    summary: "Get Huk",
  })
  @get()
  static getHuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huk",
  })
  @post("{id}")
  static createHuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
