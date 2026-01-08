import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyd")
export default class GydController {
  @operation({
    summary: "Get Gyd",
  })
  @get()
  static getGyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyd",
  })
  @post("{id}")
  static createGyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
