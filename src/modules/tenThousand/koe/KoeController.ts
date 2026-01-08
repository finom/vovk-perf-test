import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koe")
export default class KoeController {
  @operation({
    summary: "Get Koe",
  })
  @get()
  static getKoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koe",
  })
  @post("{id}")
  static createKoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
