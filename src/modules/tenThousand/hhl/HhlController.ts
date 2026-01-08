import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhl")
export default class HhlController {
  @operation({
    summary: "Get Hhl",
  })
  @get()
  static getHhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhl",
  })
  @post("{id}")
  static createHhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
