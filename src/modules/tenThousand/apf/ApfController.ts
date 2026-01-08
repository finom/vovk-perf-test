import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apf")
export default class ApfController {
  @operation({
    summary: "Get Apf",
  })
  @get()
  static getApf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apf",
  })
  @post("{id}")
  static createApf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
