import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejc")
export default class EjcController {
  @operation({
    summary: "Get Ejc",
  })
  @get()
  static getEjc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejc",
  })
  @post("{id}")
  static createEjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
