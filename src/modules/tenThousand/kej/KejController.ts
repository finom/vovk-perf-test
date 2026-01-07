import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kej")
export default class KejController {
  @operation({
    summary: "Get Kej",
  })
  @get()
  static getKej = procedure({
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
