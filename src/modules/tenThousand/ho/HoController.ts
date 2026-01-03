import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hos")
export default class HoController {
  @operation({
    summary: "Get Hos",
  })
  @get()
  static getHos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ho",
  })
  @post("{id}")
  static createHo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
