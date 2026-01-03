import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnxes")
export default class FnxController {
  @operation({
    summary: "Get Fnxes",
  })
  @get()
  static getFnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnx",
  })
  @post("{id}")
  static createFnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
