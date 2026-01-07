import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrl")
export default class LrlController {
  @operation({
    summary: "Get Lrl",
  })
  @get()
  static getLrl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrl",
  })
  @post("{id}")
  static createLrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
