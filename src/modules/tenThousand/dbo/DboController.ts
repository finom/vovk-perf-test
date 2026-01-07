import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbo")
export default class DboController {
  @operation({
    summary: "Get Dbo",
  })
  @get()
  static getDbo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbo",
  })
  @post("{id}")
  static createDbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
