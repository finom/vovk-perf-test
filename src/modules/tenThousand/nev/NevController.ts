import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nev")
export default class NevController {
  @operation({
    summary: "Get Nev",
  })
  @get()
  static getNev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nev",
  })
  @post("{id}")
  static createNev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
