import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsh")
export default class NshController {
  @operation({
    summary: "Get Nsh",
  })
  @get()
  static getNsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsh",
  })
  @post("{id}")
  static createNsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
