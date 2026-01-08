import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fih")
export default class FihController {
  @operation({
    summary: "Get Fih",
  })
  @get()
  static getFih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fih",
  })
  @post("{id}")
  static createFih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
