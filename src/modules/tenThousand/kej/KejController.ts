import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kejs")
export default class KejController {
  @operation({
    summary: "Get Kejs",
  })
  @get()
  static getKejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kej",
  })
  @post("{id}")
  static createKej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
