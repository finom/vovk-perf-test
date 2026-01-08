import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfw")
export default class NfwController {
  @operation({
    summary: "Get Nfw",
  })
  @get()
  static getNfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfw",
  })
  @post("{id}")
  static createNfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
