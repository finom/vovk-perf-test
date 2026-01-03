import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzts")
export default class KztController {
  @operation({
    summary: "Get Kzts",
  })
  @get()
  static getKzts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzt",
  })
  @post("{id}")
  static createKzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
