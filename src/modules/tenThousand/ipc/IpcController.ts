import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipcs")
export default class IpcController {
  @operation({
    summary: "Get Ipcs",
  })
  @get()
  static getIpcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipc",
  })
  @post("{id}")
  static createIpc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
