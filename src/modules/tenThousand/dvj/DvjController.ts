import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvj")
export default class DvjController {
  @operation({
    summary: "Get Dvj",
  })
  @get()
  static getDvj = procedure({
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
