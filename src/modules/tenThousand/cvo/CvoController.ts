import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvos")
export default class CvoController {
  @operation({
    summary: "Get Cvos",
  })
  @get()
  static getCvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cvo",
  })
  @post("{id}")
  static createCvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
