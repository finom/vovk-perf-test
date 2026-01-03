import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hans")
export default class HanController {
  @operation({
    summary: "Get Hans",
  })
  @get()
  static getHans = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Han",
  })
  @post("{id}")
  static createHan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
