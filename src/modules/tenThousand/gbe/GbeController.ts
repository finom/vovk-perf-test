import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbe")
export default class GbeController {
  @operation({
    summary: "Get Gbe",
  })
  @get()
  static getGbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbe",
  })
  @post("{id}")
  static createGbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
