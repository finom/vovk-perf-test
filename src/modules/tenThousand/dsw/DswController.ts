import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsw")
export default class DswController {
  @operation({
    summary: "Get Dsw",
  })
  @get()
  static getDsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsw",
  })
  @post("{id}")
  static createDsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
