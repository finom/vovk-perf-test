import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwj")
export default class IwjController {
  @operation({
    summary: "Get Iwj",
  })
  @get()
  static getIwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwj",
  })
  @post("{id}")
  static createIwj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
