import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arh")
export default class ArhController {
  @operation({
    summary: "Get Arh",
  })
  @get()
  static getArh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arh",
  })
  @post("{id}")
  static createArh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
