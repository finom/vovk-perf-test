import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdp")
export default class JdpController {
  @operation({
    summary: "Get Jdp",
  })
  @get()
  static getJdp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdp",
  })
  @post("{id}")
  static createJdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
