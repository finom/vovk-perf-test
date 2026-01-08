import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oq")
export default class OqController {
  @operation({
    summary: "Get Oq",
  })
  @get()
  static getOq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oq",
  })
  @post("{id}")
  static createOq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
