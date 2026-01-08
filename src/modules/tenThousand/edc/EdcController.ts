import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edc")
export default class EdcController {
  @operation({
    summary: "Get Edc",
  })
  @get()
  static getEdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edc",
  })
  @post("{id}")
  static createEdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
