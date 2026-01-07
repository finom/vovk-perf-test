import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbu")
export default class DbuController {
  @operation({
    summary: "Get Dbu",
  })
  @get()
  static getDbu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbu",
  })
  @post("{id}")
  static createDbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
