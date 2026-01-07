import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhu")
export default class DhuController {
  @operation({
    summary: "Get Dhu",
  })
  @get()
  static getDhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhu",
  })
  @post("{id}")
  static createDhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
