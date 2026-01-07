import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebt")
export default class EbtController {
  @operation({
    summary: "Get Ebt",
  })
  @get()
  static getEbt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebt",
  })
  @post("{id}")
  static createEbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
