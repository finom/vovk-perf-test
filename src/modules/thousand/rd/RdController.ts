import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rd")
export default class RdController {
  @operation({
    summary: "Get Rd",
  })
  @get()
  static getRd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rd",
  })
  @post("{id}")
  static createRd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
