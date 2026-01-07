import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kck")
export default class KckController {
  @operation({
    summary: "Get Kck",
  })
  @get()
  static getKck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kck",
  })
  @post("{id}")
  static createKck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
