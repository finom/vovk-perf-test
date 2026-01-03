import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mibs")
export default class MibController {
  @operation({
    summary: "Get Mibs",
  })
  @get()
  static getMibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mib",
  })
  @post("{id}")
  static createMib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
