import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fec")
export default class FecController {
  @operation({
    summary: "Get Fec",
  })
  @get()
  static getFec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fec",
  })
  @post("{id}")
  static createFec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
