import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcd")
export default class KcdController {
  @operation({
    summary: "Get Kcd",
  })
  @get()
  static getKcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcd",
  })
  @post("{id}")
  static createKcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
