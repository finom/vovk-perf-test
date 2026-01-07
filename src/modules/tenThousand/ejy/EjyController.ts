import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejy")
export default class EjyController {
  @operation({
    summary: "Get Ejy",
  })
  @get()
  static getEjy = procedure({
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
