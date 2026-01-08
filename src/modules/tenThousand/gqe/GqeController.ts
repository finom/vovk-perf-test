import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqe")
export default class GqeController {
  @operation({
    summary: "Get Gqe",
  })
  @get()
  static getGqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqe",
  })
  @post("{id}")
  static createGqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
