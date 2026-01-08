import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hia")
export default class HiaController {
  @operation({
    summary: "Get Hia",
  })
  @get()
  static getHia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hia",
  })
  @post("{id}")
  static createHia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
