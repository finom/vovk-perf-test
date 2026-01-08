import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azc")
export default class AzcController {
  @operation({
    summary: "Get Azc",
  })
  @get()
  static getAzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azc",
  })
  @post("{id}")
  static createAzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
