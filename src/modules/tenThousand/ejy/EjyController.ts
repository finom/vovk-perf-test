import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejies")
export default class EjyController {
  @operation({
    summary: "Get Ejies",
  })
  @get()
  static getEjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejy",
  })
  @post("{id}")
  static createEjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
