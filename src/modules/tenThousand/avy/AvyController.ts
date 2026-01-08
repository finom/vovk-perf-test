import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avy")
export default class AvyController {
  @operation({
    summary: "Get Avy",
  })
  @get()
  static getAvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avy",
  })
  @post("{id}")
  static createAvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
