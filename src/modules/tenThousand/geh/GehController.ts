import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("geh")
export default class GehController {
  @operation({
    summary: "Get Geh",
  })
  @get()
  static getGeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geh",
  })
  @post("{id}")
  static createGeh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
