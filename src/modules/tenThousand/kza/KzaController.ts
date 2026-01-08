import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kza")
export default class KzaController {
  @operation({
    summary: "Get Kza",
  })
  @get()
  static getKza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kza",
  })
  @post("{id}")
  static createKza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
