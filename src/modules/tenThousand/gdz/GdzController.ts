import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdz")
export default class GdzController {
  @operation({
    summary: "Get Gdz",
  })
  @get()
  static getGdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdz",
  })
  @post("{id}")
  static createGdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
