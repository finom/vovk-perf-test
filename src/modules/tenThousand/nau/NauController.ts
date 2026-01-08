import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nau")
export default class NauController {
  @operation({
    summary: "Get Nau",
  })
  @get()
  static getNau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nau",
  })
  @post("{id}")
  static createNau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
