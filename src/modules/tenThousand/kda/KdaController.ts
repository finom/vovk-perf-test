import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kda")
export default class KdaController {
  @operation({
    summary: "Get Kda",
  })
  @get()
  static getKda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kda",
  })
  @post("{id}")
  static createKda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
