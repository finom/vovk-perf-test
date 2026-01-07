import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mke")
export default class MkeController {
  @operation({
    summary: "Get Mke",
  })
  @get()
  static getMke = procedure({
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
