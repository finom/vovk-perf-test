import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxt")
export default class KxtController {
  @operation({
    summary: "Get Kxt",
  })
  @get()
  static getKxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxt",
  })
  @post("{id}")
  static createKxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
