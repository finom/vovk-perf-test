import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gek")
export default class GekController {
  @operation({
    summary: "Get Gek",
  })
  @get()
  static getGek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gek",
  })
  @post("{id}")
  static createGek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
