import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvo")
export default class CvoController {
  @operation({
    summary: "Get Cvo",
  })
  @get()
  static getCvo = procedure({
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
