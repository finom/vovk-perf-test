import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxt")
export default class CxtController {
  @operation({
    summary: "Get Cxt",
  })
  @get()
  static getCxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cxt",
  })
  @post("{id}")
  static createCxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
