import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kac")
export default class KacController {
  @operation({
    summary: "Get Kac",
  })
  @get()
  static getKac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kac",
  })
  @post("{id}")
  static createKac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
