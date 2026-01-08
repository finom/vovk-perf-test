import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyq")
export default class GyqController {
  @operation({
    summary: "Get Gyq",
  })
  @get()
  static getGyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyq",
  })
  @post("{id}")
  static createGyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
