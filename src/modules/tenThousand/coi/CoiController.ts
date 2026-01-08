import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("coi")
export default class CoiController {
  @operation({
    summary: "Get Coi",
  })
  @get()
  static getCoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coi",
  })
  @post("{id}")
  static createCoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
