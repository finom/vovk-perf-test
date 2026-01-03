import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beys")
export default class BeyController {
  @operation({
    summary: "Get Beys",
  })
  @get()
  static getBeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bey",
  })
  @post("{id}")
  static createBey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
