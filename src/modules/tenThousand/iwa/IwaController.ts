import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwa")
export default class IwaController {
  @operation({
    summary: "Get Iwa",
  })
  @get()
  static getIwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwa",
  })
  @post("{id}")
  static createIwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
