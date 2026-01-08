import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mej")
export default class MejController {
  @operation({
    summary: "Get Mej",
  })
  @get()
  static getMej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mej",
  })
  @post("{id}")
  static createMej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
