import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nru")
export default class NruController {
  @operation({
    summary: "Get Nru",
  })
  @get()
  static getNru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nru",
  })
  @post("{id}")
  static createNru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
