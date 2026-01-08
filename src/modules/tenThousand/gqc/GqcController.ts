import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqc")
export default class GqcController {
  @operation({
    summary: "Get Gqc",
  })
  @get()
  static getGqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqc",
  })
  @post("{id}")
  static createGqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
