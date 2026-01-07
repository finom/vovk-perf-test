import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbw")
export default class KbwController {
  @operation({
    summary: "Get Kbw",
  })
  @get()
  static getKbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbw",
  })
  @post("{id}")
  static createKbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
