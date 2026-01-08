import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eit")
export default class EitController {
  @operation({
    summary: "Get Eit",
  })
  @get()
  static getEit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eit",
  })
  @post("{id}")
  static createEit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
