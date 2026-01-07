import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpx")
export default class CpxController {
  @operation({
    summary: "Get Cpx",
  })
  @get()
  static getCpx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpx",
  })
  @post("{id}")
  static createCpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
