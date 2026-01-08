import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gew")
export default class GewController {
  @operation({
    summary: "Get Gew",
  })
  @get()
  static getGew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gew",
  })
  @post("{id}")
  static createGew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
