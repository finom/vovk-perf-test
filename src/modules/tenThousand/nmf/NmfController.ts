import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmf")
export default class NmfController {
  @operation({
    summary: "Get Nmf",
  })
  @get()
  static getNmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmf",
  })
  @post("{id}")
  static createNmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
