import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blqs")
export default class BlqController {
  @operation({
    summary: "Get Blqs",
  })
  @get()
  static getBlqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blq",
  })
  @post("{id}")
  static createBlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
