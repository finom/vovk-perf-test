import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsbs")
export default class DsbController {
  @operation({
    summary: "Get Dsbs",
  })
  @get()
  static getDsbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsb",
  })
  @post("{id}")
  static createDsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
