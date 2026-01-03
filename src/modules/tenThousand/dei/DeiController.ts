import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deis")
export default class DeiController {
  @operation({
    summary: "Get Deis",
  })
  @get()
  static getDeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dei",
  })
  @post("{id}")
  static createDei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
