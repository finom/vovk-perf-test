import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izy")
export default class IzyController {
  @operation({
    summary: "Get Izy",
  })
  @get()
  static getIzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izy",
  })
  @post("{id}")
  static createIzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
