import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dno")
export default class DnoController {
  @operation({
    summary: "Get Dno",
  })
  @get()
  static getDno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dno",
  })
  @post("{id}")
  static createDno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
