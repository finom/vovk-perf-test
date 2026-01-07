import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cva")
export default class CvaController {
  @operation({
    summary: "Get Cva",
  })
  @get()
  static getCva = procedure({
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
