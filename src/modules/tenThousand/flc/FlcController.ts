import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flc")
export default class FlcController {
  @operation({
    summary: "Get Flc",
  })
  @get()
  static getFlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flc",
  })
  @post("{id}")
  static createFlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
