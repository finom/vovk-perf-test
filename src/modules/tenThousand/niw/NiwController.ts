import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("niw")
export default class NiwController {
  @operation({
    summary: "Get Niw",
  })
  @get()
  static getNiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niw",
  })
  @post("{id}")
  static createNiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
