import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnfs")
export default class DnfController {
  @operation({
    summary: "Get Dnfs",
  })
  @get()
  static getDnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnf",
  })
  @post("{id}")
  static createDnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
