import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihd")
export default class IhdController {
  @operation({
    summary: "Get Ihd",
  })
  @get()
  static getIhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihd",
  })
  @post("{id}")
  static createIhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
