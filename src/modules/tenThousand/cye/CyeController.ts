import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cye")
export default class CyeController {
  @operation({
    summary: "Get Cye",
  })
  @get()
  static getCye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cye",
  })
  @post("{id}")
  static createCye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
