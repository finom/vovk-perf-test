import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoe")
export default class EoeController {
  @operation({
    summary: "Get Eoe",
  })
  @get()
  static getEoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoe",
  })
  @post("{id}")
  static createEoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
