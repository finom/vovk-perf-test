import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhu")
export default class FhuController {
  @operation({
    summary: "Get Fhu",
  })
  @get()
  static getFhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhu",
  })
  @post("{id}")
  static createFhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
