import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gob")
export default class GobController {
  @operation({
    summary: "Get Gob",
  })
  @get()
  static getGob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gob",
  })
  @post("{id}")
  static createGob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
