import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rr")
export default class RrController {
  @operation({
    summary: "Get Rr",
  })
  @get()
  static getRr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rr",
  })
  @post("{id}")
  static createRr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
