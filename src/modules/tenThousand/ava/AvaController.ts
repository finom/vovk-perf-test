import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ava")
export default class AvaController {
  @operation({
    summary: "Get Ava",
  })
  @get()
  static getAva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ava",
  })
  @post("{id}")
  static createAva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
