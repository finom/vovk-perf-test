import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqfs")
export default class LqfController {
  @operation({
    summary: "Get Lqfs",
  })
  @get()
  static getLqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqf",
  })
  @post("{id}")
  static createLqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
