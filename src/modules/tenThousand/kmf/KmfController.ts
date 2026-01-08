import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmf")
export default class KmfController {
  @operation({
    summary: "Get Kmf",
  })
  @get()
  static getKmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmf",
  })
  @post("{id}")
  static createKmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
