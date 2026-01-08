import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjd")
export default class KjdController {
  @operation({
    summary: "Get Kjd",
  })
  @get()
  static getKjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjd",
  })
  @post("{id}")
  static createKjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
