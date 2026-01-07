import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myu")
export default class MyuController {
  @operation({
    summary: "Get Myu",
  })
  @get()
  static getMyu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myu",
  })
  @post("{id}")
  static createMyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
