import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdas")
export default class FdaController {
  @operation({
    summary: "Get Fdas",
  })
  @get()
  static getFdas = procedure({
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
