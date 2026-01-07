import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpc")
export default class MpcController {
  @operation({
    summary: "Get Mpc",
  })
  @get()
  static getMpc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpc",
  })
  @post("{id}")
  static createMpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
