import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvds")
export default class DvdController {
  @operation({
    summary: "Get Dvds",
  })
  @get()
  static getDvds = procedure({
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
