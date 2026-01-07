import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhz")
export default class JhzController {
  @operation({
    summary: "Get Jhz",
  })
  @get()
  static getJhz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhz",
  })
  @post("{id}")
  static createJhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
