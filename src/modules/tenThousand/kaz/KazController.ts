import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kaz")
export default class KazController {
  @operation({
    summary: "Get Kaz",
  })
  @get()
  static getKaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaz",
  })
  @post("{id}")
  static createKaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
