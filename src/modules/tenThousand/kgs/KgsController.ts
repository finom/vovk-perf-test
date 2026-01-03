import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgs")
export default class KgsController {
  @operation({
    summary: "Get Kgs",
  })
  @get()
  static getKgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgs",
  })
  @post("{id}")
  static createKgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
