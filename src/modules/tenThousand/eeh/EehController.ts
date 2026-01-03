import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eehs")
export default class EehController {
  @operation({
    summary: "Get Eehs",
  })
  @get()
  static getEehs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eeh",
  })
  @post("{id}")
  static createEeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
