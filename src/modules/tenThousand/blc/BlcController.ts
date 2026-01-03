import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blcs")
export default class BlcController {
  @operation({
    summary: "Get Blcs",
  })
  @get()
  static getBlcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blc",
  })
  @post("{id}")
  static createBlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
