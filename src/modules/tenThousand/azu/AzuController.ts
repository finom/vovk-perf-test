import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azu")
export default class AzuController {
  @operation({
    summary: "Get Azu",
  })
  @get()
  static getAzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azu",
  })
  @post("{id}")
  static createAzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
