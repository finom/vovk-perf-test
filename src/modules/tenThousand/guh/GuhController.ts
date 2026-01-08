import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guh")
export default class GuhController {
  @operation({
    summary: "Get Guh",
  })
  @get()
  static getGuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guh",
  })
  @post("{id}")
  static createGuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
