import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fycs")
export default class FycController {
  @operation({
    summary: "Get Fycs",
  })
  @get()
  static getFycs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyc",
  })
  @post("{id}")
  static createFyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
