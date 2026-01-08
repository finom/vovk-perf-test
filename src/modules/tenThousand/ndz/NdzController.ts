import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndz")
export default class NdzController {
  @operation({
    summary: "Get Ndz",
  })
  @get()
  static getNdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndz",
  })
  @post("{id}")
  static createNdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
