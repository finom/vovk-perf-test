import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngo")
export default class NgoController {
  @operation({
    summary: "Get Ngo",
  })
  @get()
  static getNgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngo",
  })
  @post("{id}")
  static createNgo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
