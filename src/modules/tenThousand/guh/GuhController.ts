import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guhs")
export default class GuhController {
  @operation({
    summary: "Get Guhs",
  })
  @get()
  static getGuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guh",
  })
  @post("{id}")
  static createGuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
