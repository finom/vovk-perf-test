import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meys")
export default class MeyController {
  @operation({
    summary: "Get Meys",
  })
  @get()
  static getMeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mey",
  })
  @post("{id}")
  static createMey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
