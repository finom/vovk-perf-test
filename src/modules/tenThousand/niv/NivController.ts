import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("niv")
export default class NivController {
  @operation({
    summary: "Get Niv",
  })
  @get()
  static getNiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niv",
  })
  @post("{id}")
  static createNiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
