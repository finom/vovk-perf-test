import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gufs")
export default class GufController {
  @operation({
    summary: "Get Gufs",
  })
  @get()
  static getGufs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guf",
  })
  @post("{id}")
  static createGuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
