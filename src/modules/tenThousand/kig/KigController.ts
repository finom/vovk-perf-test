import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kig")
export default class KigController {
  @operation({
    summary: "Get Kig",
  })
  @get()
  static getKig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kig",
  })
  @post("{id}")
  static createKig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
