import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghh")
export default class GhhController {
  @operation({
    summary: "Get Ghh",
  })
  @get()
  static getGhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghh",
  })
  @post("{id}")
  static createGhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
