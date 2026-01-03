import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmies")
export default class DmyController {
  @operation({
    summary: "Get Dmies",
  })
  @get()
  static getDmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmy",
  })
  @post("{id}")
  static createDmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
