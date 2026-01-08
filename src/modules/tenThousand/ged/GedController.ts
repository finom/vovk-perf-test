import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ged")
export default class GedController {
  @operation({
    summary: "Get Ged",
  })
  @get()
  static getGed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ged",
  })
  @post("{id}")
  static createGed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
