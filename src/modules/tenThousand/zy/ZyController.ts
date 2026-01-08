import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zy")
export default class ZyController {
  @operation({
    summary: "Get Zy",
  })
  @get()
  static getZy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zy",
  })
  @post("{id}")
  static createZy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
