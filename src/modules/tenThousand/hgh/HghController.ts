import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hghs")
export default class HghController {
  @operation({
    summary: "Get Hghs",
  })
  @get()
  static getHghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgh",
  })
  @post("{id}")
  static createHgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
