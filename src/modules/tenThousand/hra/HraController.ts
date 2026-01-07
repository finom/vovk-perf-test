import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hra")
export default class HraController {
  @operation({
    summary: "Get Hra",
  })
  @get()
  static getHra = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hra",
  })
  @post("{id}")
  static createHra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
