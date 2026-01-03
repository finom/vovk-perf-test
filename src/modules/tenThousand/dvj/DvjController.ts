import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvjs")
export default class DvjController {
  @operation({
    summary: "Get Dvjs",
  })
  @get()
  static getDvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvj",
  })
  @post("{id}")
  static createDvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
