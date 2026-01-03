import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cngs")
export default class CngController {
  @operation({
    summary: "Get Cngs",
  })
  @get()
  static getCngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cng",
  })
  @post("{id}")
  static createCng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
