import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbj")
export default class KbjController {
  @operation({
    summary: "Get Kbj",
  })
  @get()
  static getKbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbj",
  })
  @post("{id}")
  static createKbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
