import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdc")
export default class MdcController {
  @operation({
    summary: "Get Mdc",
  })
  @get()
  static getMdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdc",
  })
  @post("{id}")
  static createMdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
