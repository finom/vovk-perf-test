import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtu")
export default class DtuController {
  @operation({
    summary: "Get Dtu",
  })
  @get()
  static getDtu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtu",
  })
  @post("{id}")
  static createDtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
