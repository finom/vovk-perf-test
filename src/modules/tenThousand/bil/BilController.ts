import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bil")
export default class BilController {
  @operation({
    summary: "Get Bil",
  })
  @get()
  static getBil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bil",
  })
  @post("{id}")
  static createBil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
