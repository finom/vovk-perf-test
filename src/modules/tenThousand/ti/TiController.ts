import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ti")
export default class TiController {
  @operation({
    summary: "Get Ti",
  })
  @get()
  static getTi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ti",
  })
  @post("{id}")
  static createTi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
