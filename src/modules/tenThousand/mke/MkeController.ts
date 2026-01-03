import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkes")
export default class MkeController {
  @operation({
    summary: "Get Mkes",
  })
  @get()
  static getMkes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mke",
  })
  @post("{id}")
  static createMke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
