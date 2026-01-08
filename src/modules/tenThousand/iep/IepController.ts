import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iep")
export default class IepController {
  @operation({
    summary: "Get Iep",
  })
  @get()
  static getIep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iep",
  })
  @post("{id}")
  static createIep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
