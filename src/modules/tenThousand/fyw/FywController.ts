import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyws")
export default class FywController {
  @operation({
    summary: "Get Fyws",
  })
  @get()
  static getFyws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyw",
  })
  @post("{id}")
  static createFyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
