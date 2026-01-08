import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kx")
export default class KxController {
  @operation({
    summary: "Get Kx",
  })
  @get()
  static getKx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kx",
  })
  @post("{id}")
  static createKx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
