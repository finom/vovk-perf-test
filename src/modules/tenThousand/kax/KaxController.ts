import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaxes")
export default class KaxController {
  @operation({
    summary: "Get Kaxes",
  })
  @get()
  static getKaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kax",
  })
  @post("{id}")
  static createKax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
