import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kve")
export default class KveController {
  @operation({
    summary: "Get Kve",
  })
  @get()
  static getKve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kve",
  })
  @post("{id}")
  static createKve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
