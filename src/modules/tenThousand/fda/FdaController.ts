import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fda")
export default class FdaController {
  @operation({
    summary: "Get Fda",
  })
  @get()
  static getFda = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fda",
  })
  @post("{id}")
  static createFda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
