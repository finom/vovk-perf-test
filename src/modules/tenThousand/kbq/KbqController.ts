import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbq")
export default class KbqController {
  @operation({
    summary: "Get Kbq",
  })
  @get()
  static getKbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbq",
  })
  @post("{id}")
  static createKbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
