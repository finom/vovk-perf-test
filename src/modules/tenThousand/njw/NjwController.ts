import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njws")
export default class NjwController {
  @operation({
    summary: "Get Njws",
  })
  @get()
  static getNjws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njw",
  })
  @post("{id}")
  static createNjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
