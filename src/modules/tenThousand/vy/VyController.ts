import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vy")
export default class VyController {
  @operation({
    summary: "Get Vy",
  })
  @get()
  static getVy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vy",
  })
  @post("{id}")
  static createVy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
