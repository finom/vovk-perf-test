import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cox")
export default class CoxController {
  @operation({
    summary: "Get Cox",
  })
  @get()
  static getCox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cox",
  })
  @post("{id}")
  static createCox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
