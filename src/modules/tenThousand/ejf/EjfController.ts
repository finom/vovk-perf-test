import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejf")
export default class EjfController {
  @operation({
    summary: "Get Ejf",
  })
  @get()
  static getEjf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejf",
  })
  @post("{id}")
  static createEjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
