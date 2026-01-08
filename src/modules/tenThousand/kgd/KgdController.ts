import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgd")
export default class KgdController {
  @operation({
    summary: "Get Kgd",
  })
  @get()
  static getKgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgd",
  })
  @post("{id}")
  static createKgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
