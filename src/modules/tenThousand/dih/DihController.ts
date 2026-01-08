import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dih")
export default class DihController {
  @operation({
    summary: "Get Dih",
  })
  @get()
  static getDih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dih",
  })
  @post("{id}")
  static createDih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
