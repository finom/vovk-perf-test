import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bla")
export default class BlaController {
  @operation({
    summary: "Get Bla",
  })
  @get()
  static getBla = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bla",
  })
  @post("{id}")
  static createBla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
