import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("giw")
export default class GiwController {
  @operation({
    summary: "Get Giw",
  })
  @get()
  static getGiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giw",
  })
  @post("{id}")
  static createGiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
