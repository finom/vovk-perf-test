import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnr")
export default class DnrController {
  @operation({
    summary: "Get Dnr",
  })
  @get()
  static getDnr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnr",
  })
  @post("{id}")
  static createDnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
