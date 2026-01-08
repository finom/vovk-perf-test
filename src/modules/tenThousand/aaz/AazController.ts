import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aaz")
export default class AazController {
  @operation({
    summary: "Get Aaz",
  })
  @get()
  static getAaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaz",
  })
  @post("{id}")
  static createAaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
