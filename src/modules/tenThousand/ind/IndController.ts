import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ind")
export default class IndController {
  @operation({
    summary: "Get Ind",
  })
  @get()
  static getInd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ind",
  })
  @post("{id}")
  static createInd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
