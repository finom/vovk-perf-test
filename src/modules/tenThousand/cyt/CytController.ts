import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyt")
export default class CytController {
  @operation({
    summary: "Get Cyt",
  })
  @get()
  static getCyt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyt",
  })
  @post("{id}")
  static createCyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
