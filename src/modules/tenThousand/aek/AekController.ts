import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aek")
export default class AekController {
  @operation({
    summary: "Get Aek",
  })
  @get()
  static getAek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aek",
  })
  @post("{id}")
  static createAek = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
