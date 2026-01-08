import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nly")
export default class NlyController {
  @operation({
    summary: "Get Nly",
  })
  @get()
  static getNly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nly",
  })
  @post("{id}")
  static createNly = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
