import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcfs")
export default class FcfController {
  @operation({
    summary: "Get Fcfs",
  })
  @get()
  static getFcfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcf",
  })
  @post("{id}")
  static createFcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
