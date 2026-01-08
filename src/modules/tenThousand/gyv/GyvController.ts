import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyv")
export default class GyvController {
  @operation({
    summary: "Get Gyv",
  })
  @get()
  static getGyv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyv",
  })
  @post("{id}")
  static createGyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
