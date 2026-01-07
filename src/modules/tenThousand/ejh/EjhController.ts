import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejh")
export default class EjhController {
  @operation({
    summary: "Get Ejh",
  })
  @get()
  static getEjh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejh",
  })
  @post("{id}")
  static createEjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
