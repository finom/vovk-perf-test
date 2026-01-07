import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njd")
export default class NjdController {
  @operation({
    summary: "Get Njd",
  })
  @get()
  static getNjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njd",
  })
  @post("{id}")
  static createNjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
