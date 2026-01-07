import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmi")
export default class FmiController {
  @operation({
    summary: "Get Fmi",
  })
  @get()
  static getFmi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmi",
  })
  @post("{id}")
  static createFmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
