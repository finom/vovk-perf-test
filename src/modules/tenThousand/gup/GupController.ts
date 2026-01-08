import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gup")
export default class GupController {
  @operation({
    summary: "Get Gup",
  })
  @get()
  static getGup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gup",
  })
  @post("{id}")
  static createGup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
