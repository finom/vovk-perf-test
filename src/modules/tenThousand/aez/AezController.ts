import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aez")
export default class AezController {
  @operation({
    summary: "Get Aez",
  })
  @get()
  static getAez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aez",
  })
  @post("{id}")
  static createAez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
