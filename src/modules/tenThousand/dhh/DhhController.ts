import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhh")
export default class DhhController {
  @operation({
    summary: "Get Dhh",
  })
  @get()
  static getDhh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhh",
  })
  @post("{id}")
  static createDhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
