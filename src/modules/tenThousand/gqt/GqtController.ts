import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqt")
export default class GqtController {
  @operation({
    summary: "Get Gqt",
  })
  @get()
  static getGqt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqt",
  })
  @post("{id}")
  static createGqt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
