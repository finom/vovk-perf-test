import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksd")
export default class KsdController {
  @operation({
    summary: "Get Ksd",
  })
  @get()
  static getKsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksd",
  })
  @post("{id}")
  static createKsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
