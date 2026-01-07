import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azu")
export default class AzuController {
  @operation({
    summary: "Get Azu",
  })
  @get()
  static getAzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azu",
  })
  @post("{id}")
  static createAzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
