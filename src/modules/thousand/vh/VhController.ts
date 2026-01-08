import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vh")
export default class VhController {
  @operation({
    summary: "Get Vh",
  })
  @get()
  static getVh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vh",
  })
  @post("{id}")
  static createVh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
