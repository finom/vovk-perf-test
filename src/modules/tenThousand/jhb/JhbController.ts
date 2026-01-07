import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhb")
export default class JhbController {
  @operation({
    summary: "Get Jhb",
  })
  @get()
  static getJhb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhb",
  })
  @post("{id}")
  static createJhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
