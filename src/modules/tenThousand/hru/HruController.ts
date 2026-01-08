import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hru")
export default class HruController {
  @operation({
    summary: "Get Hru",
  })
  @get()
  static getHru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hru",
  })
  @post("{id}")
  static createHru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
