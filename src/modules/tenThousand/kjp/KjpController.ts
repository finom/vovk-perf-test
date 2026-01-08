import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjp")
export default class KjpController {
  @operation({
    summary: "Get Kjp",
  })
  @get()
  static getKjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjp",
  })
  @post("{id}")
  static createKjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
