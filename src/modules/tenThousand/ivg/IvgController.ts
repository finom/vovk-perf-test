import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivg")
export default class IvgController {
  @operation({
    summary: "Get Ivg",
  })
  @get()
  static getIvg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivg",
  })
  @post("{id}")
  static createIvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
