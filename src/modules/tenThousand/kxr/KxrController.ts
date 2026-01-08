import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxr")
export default class KxrController {
  @operation({
    summary: "Get Kxr",
  })
  @get()
  static getKxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxr",
  })
  @post("{id}")
  static createKxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
