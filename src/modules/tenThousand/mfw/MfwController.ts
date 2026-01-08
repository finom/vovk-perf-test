import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfw")
export default class MfwController {
  @operation({
    summary: "Get Mfw",
  })
  @get()
  static getMfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfw",
  })
  @post("{id}")
  static createMfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
