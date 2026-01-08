import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axt")
export default class AxtController {
  @operation({
    summary: "Get Axt",
  })
  @get()
  static getAxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axt",
  })
  @post("{id}")
  static createAxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
