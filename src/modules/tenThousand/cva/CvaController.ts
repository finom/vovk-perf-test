import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvas")
export default class CvaController {
  @operation({
    summary: "Get Cvas",
  })
  @get()
  static getCvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cva",
  })
  @post("{id}")
  static createCva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
