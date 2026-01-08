import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iky")
export default class IkyController {
  @operation({
    summary: "Get Iky",
  })
  @get()
  static getIky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iky",
  })
  @post("{id}")
  static createIky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
