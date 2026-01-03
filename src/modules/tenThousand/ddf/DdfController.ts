import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddfs")
export default class DdfController {
  @operation({
    summary: "Get Ddfs",
  })
  @get()
  static getDdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddf",
  })
  @post("{id}")
  static createDdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
