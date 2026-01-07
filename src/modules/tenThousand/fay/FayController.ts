import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fay")
export default class FayController {
  @operation({
    summary: "Get Fay",
  })
  @get()
  static getFay = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fay",
  })
  @post("{id}")
  static createFay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
