import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipc")
export default class IpcController {
  @operation({
    summary: "Get Ipc",
  })
  @get()
  static getIpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipc",
  })
  @post("{id}")
  static createIpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
