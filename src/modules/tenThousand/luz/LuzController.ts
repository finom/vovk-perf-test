import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luzs")
export default class LuzController {
  @operation({
    summary: "Get Luzs",
  })
  @get()
  static getLuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luz",
  })
  @post("{id}")
  static createLuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
