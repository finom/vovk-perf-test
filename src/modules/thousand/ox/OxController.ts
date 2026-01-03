import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oxen")
export default class OxController {
  @operation({
    summary: "Get Oxen",
  })
  @get()
  static getOxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ox",
  })
  @post("{id}")
  static createOx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
