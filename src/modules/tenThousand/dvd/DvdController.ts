import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvd")
export default class DvdController {
  @operation({
    summary: "Get Dvd",
  })
  @get()
  static getDvd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvd",
  })
  @post("{id}")
  static createDvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
