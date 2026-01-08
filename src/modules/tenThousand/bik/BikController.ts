import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bik")
export default class BikController {
  @operation({
    summary: "Get Bik",
  })
  @get()
  static getBik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bik",
  })
  @post("{id}")
  static createBik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
