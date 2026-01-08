import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hra")
export default class HraController {
  @operation({
    summary: "Get Hra",
  })
  @get()
  static getHra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hra",
  })
  @post("{id}")
  static createHra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
