import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deb")
export default class DebController {
  @operation({
    summary: "Get Deb",
  })
  @get()
  static getDeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Deb",
  })
  @post("{id}")
  static createDeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
