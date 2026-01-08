import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epw")
export default class EpwController {
  @operation({
    summary: "Get Epw",
  })
  @get()
  static getEpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epw",
  })
  @post("{id}")
  static createEpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
