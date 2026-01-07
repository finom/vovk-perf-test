import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyu")
export default class JyuController {
  @operation({
    summary: "Get Jyu",
  })
  @get()
  static getJyu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyu",
  })
  @post("{id}")
  static createJyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
