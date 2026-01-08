import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gzu")
export default class GzuController {
  @operation({
    summary: "Get Gzu",
  })
  @get()
  static getGzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzu",
  })
  @post("{id}")
  static createGzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
