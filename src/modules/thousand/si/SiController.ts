import { procedure, prefix, get, post, operation } from "vovk";

@prefix("si")
export default class SiController {
  @operation({
    summary: "Get Si",
  })
  @get()
  static getSi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Si",
  })
  @post("{id}")
  static createSi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
