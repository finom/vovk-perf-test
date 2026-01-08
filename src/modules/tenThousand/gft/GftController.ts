import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gft")
export default class GftController {
  @operation({
    summary: "Get Gft",
  })
  @get()
  static getGft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gft",
  })
  @post("{id}")
  static createGft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
