import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpm")
export default class KpmController {
  @operation({
    summary: "Get Kpm",
  })
  @get()
  static getKpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpm",
  })
  @post("{id}")
  static createKpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
