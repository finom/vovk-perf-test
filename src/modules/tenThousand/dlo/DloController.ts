import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dlos")
export default class DloController {
  @operation({
    summary: "Get Dlos",
  })
  @get()
  static getDlos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dlo",
  })
  @post("{id}")
  static createDlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
