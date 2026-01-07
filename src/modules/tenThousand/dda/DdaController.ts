import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dda")
export default class DdaController {
  @operation({
    summary: "Get Dda",
  })
  @get()
  static getDda = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dda",
  })
  @post("{id}")
  static createDda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
