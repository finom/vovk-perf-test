import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbqs")
export default class KbqController {
  @operation({
    summary: "Get Kbqs",
  })
  @get()
  static getKbqs = procedure({
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
