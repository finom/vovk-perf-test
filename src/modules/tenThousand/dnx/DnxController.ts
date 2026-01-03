import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnxes")
export default class DnxController {
  @operation({
    summary: "Get Dnxes",
  })
  @get()
  static getDnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnx",
  })
  @post("{id}")
  static createDnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
