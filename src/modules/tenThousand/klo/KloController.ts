import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klo")
export default class KloController {
  @operation({
    summary: "Get Klo",
  })
  @get()
  static getKlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klo",
  })
  @post("{id}")
  static createKlo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
