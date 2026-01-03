import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbfs")
export default class KbfController {
  @operation({
    summary: "Get Kbfs",
  })
  @get()
  static getKbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbf",
  })
  @post("{id}")
  static createKbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
