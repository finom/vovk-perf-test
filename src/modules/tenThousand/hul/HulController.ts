import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hul")
export default class HulController {
  @operation({
    summary: "Get Hul",
  })
  @get()
  static getHul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hul",
  })
  @post("{id}")
  static createHul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
