import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayl")
export default class AylController {
  @operation({
    summary: "Get Ayl",
  })
  @get()
  static getAyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayl",
  })
  @post("{id}")
  static createAyl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
