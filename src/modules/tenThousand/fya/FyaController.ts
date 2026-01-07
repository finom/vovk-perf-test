import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fya")
export default class FyaController {
  @operation({
    summary: "Get Fya",
  })
  @get()
  static getFya = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fya",
  })
  @post("{id}")
  static createFya = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
