import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hru")
export default class HruController {
  @operation({
    summary: "Get Hru",
  })
  @get()
  static getHru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hru",
  })
  @post("{id}")
  static createHru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
