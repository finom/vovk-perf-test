import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifd")
export default class IfdController {
  @operation({
    summary: "Get Ifd",
  })
  @get()
  static getIfd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifd",
  })
  @post("{id}")
  static createIfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
