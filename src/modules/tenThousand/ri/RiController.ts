import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ri")
export default class RiController {
  @operation({
    summary: "Get Ri",
  })
  @get()
  static getRi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ri",
  })
  @post("{id}")
  static createRi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
