import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byos")
export default class ByoController {
  @operation({
    summary: "Get Byos",
  })
  @get()
  static getByos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byo",
  })
  @post("{id}")
  static createByo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
