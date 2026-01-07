import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ino")
export default class InoController {
  @operation({
    summary: "Get Ino",
  })
  @get()
  static getIno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ino",
  })
  @post("{id}")
  static createIno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
