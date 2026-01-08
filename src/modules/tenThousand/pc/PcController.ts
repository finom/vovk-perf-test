import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pc")
export default class PcController {
  @operation({
    summary: "Get Pc",
  })
  @get()
  static getPc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pc",
  })
  @post("{id}")
  static createPc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
