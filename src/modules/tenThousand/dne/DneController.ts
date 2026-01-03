import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnes")
export default class DneController {
  @operation({
    summary: "Get Dnes",
  })
  @get()
  static getDnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dne",
  })
  @post("{id}")
  static createDne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
