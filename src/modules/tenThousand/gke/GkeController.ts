import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gke")
export default class GkeController {
  @operation({
    summary: "Get Gke",
  })
  @get()
  static getGke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gke",
  })
  @post("{id}")
  static createGke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
