import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bih")
export default class BihController {
  @operation({
    summary: "Get Bih",
  })
  @get()
  static getBih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bih",
  })
  @post("{id}")
  static createBih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
