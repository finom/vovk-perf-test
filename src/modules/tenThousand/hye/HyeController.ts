import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hye")
export default class HyeController {
  @operation({
    summary: "Get Hye",
  })
  @get()
  static getHye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hye",
  })
  @post("{id}")
  static createHye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
