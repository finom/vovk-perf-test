import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbt")
export default class KbtController {
  @operation({
    summary: "Get Kbt",
  })
  @get()
  static getKbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbt",
  })
  @post("{id}")
  static createKbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
