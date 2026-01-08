import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kri")
export default class KriController {
  @operation({
    summary: "Get Kri",
  })
  @get()
  static getKri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kri",
  })
  @post("{id}")
  static createKri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
