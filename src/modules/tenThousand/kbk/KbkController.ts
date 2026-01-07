import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbk")
export default class KbkController {
  @operation({
    summary: "Get Kbk",
  })
  @get()
  static getKbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbk",
  })
  @post("{id}")
  static createKbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
