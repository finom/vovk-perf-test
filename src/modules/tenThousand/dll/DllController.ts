import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dll")
export default class DllController {
  @operation({
    summary: "Get Dll",
  })
  @get()
  static getDll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dll",
  })
  @post("{id}")
  static createDll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
