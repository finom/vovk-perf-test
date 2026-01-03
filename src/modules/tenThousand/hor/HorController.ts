import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hors")
export default class HorController {
  @operation({
    summary: "Get Hors",
  })
  @get()
  static getHors = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hor",
  })
  @post("{id}")
  static createHor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
