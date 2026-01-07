import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmy")
export default class KmyController {
  @operation({
    summary: "Get Kmy",
  })
  @get()
  static getKmy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmy",
  })
  @post("{id}")
  static createKmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
