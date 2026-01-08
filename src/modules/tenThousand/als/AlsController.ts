import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("als")
export default class AlsController {
  @operation({
    summary: "Get Als",
  })
  @get()
  static getAls = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Als",
  })
  @post("{id}")
  static createAls = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
