import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvg")
export default class DvgController {
  @operation({
    summary: "Get Dvg",
  })
  @get()
  static getDvg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvg",
  })
  @post("{id}")
  static createDvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
