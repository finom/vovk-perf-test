import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hih")
export default class HihController {
  @operation({
    summary: "Get Hih",
  })
  @get()
  static getHih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hih",
  })
  @post("{id}")
  static createHih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
