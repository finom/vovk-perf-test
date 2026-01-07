import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kob")
export default class KobController {
  @operation({
    summary: "Get Kob",
  })
  @get()
  static getKob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kob",
  })
  @post("{id}")
  static createKob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
