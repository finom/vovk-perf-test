import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhc")
export default class JhcController {
  @operation({
    summary: "Get Jhc",
  })
  @get()
  static getJhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhc",
  })
  @post("{id}")
  static createJhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
