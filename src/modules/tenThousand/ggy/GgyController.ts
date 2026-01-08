import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggy")
export default class GgyController {
  @operation({
    summary: "Get Ggy",
  })
  @get()
  static getGgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggy",
  })
  @post("{id}")
  static createGgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
