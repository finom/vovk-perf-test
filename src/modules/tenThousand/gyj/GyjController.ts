import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyj")
export default class GyjController {
  @operation({
    summary: "Get Gyj",
  })
  @get()
  static getGyj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyj",
  })
  @post("{id}")
  static createGyj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
