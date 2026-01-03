import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keds")
export default class KedController {
  @operation({
    summary: "Get Keds",
  })
  @get()
  static getKeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ked",
  })
  @post("{id}")
  static createKed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
