import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmo")
export default class NmoController {
  @operation({
    summary: "Get Nmo",
  })
  @get()
  static getNmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmo",
  })
  @post("{id}")
  static createNmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
