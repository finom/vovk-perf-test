import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvu")
export default class HvuController {
  @operation({
    summary: "Get Hvu",
  })
  @get()
  static getHvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvu",
  })
  @post("{id}")
  static createHvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
