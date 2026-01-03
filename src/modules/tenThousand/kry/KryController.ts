import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kries")
export default class KryController {
  @operation({
    summary: "Get Kries",
  })
  @get()
  static getKries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kry",
  })
  @post("{id}")
  static createKry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
