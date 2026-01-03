import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhhs")
export default class HhhController {
  @operation({
    summary: "Get Hhhs",
  })
  @get()
  static getHhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhh",
  })
  @post("{id}")
  static createHhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
