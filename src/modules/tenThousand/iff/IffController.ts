import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iffs")
export default class IffController {
  @operation({
    summary: "Get Iffs",
  })
  @get()
  static getIffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iff",
  })
  @post("{id}")
  static createIff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
