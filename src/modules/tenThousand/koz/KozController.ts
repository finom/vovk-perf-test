import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koz")
export default class KozController {
  @operation({
    summary: "Get Koz",
  })
  @get()
  static getKoz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koz",
  })
  @post("{id}")
  static createKoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
