import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fays")
export default class FayController {
  @operation({
    summary: "Get Fays",
  })
  @get()
  static getFays = procedure({
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
